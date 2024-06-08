import { NextResponse } from 'next/server';

import { createPostRepository } from '@/repository/post/PostRepository';
import { createPostService } from '@/service/post/PostService';
import { createCategoryRepository } from '@/repository/category/CategoryRepository';
import { createCategoryService } from '@/service/category/CategoryService';
import { CreatecategoryRelationRepository } from '@/repository/categoryRelation/CategoryRelationRepository';
import { createCategoryRelationService } from '@/service/categoryRelation/CategoryRelationService';
import getPokemonImage from '@/action/pokemon/getPokemonImage';

interface Tags {
  label: string;
  name: string;
  icon: string;
}

interface Category {
  id: string;
}

//新規投稿を作成、カテゴリーの追加
export async function POST(request: Request) {
  // Post
  const postRepository = createPostRepository();
  const postService = createPostService(postRepository);

  // Category
  const categoryRepository = createCategoryRepository();
  const categoryService = createCategoryService(categoryRepository);

  // CategoryRelation
  const categoryRelationRepository = CreatecategoryRelationRepository();
  const categoryRelationService = createCategoryRelationService(
    categoryRelationRepository,
  );

  const body = await request.json();
  const thumnailImage = await getPokemonImage();

  const { title, contents, userId, tags } = body;

  const postBody = {
    title,
    contents,
    thumbnail: thumnailImage,
    userId,
  };

  // 投稿を保存
  const post = await postService.createPostByUser(postBody);

  //カテゴリがない場合
  if (tags.length === 0) {
    return NextResponse.json(post);
  }

  //カテゴリがある場合
  // creatManyでもいけそう
  const categories = await Promise.all(
    tags.map(async (tag: Tags) => {
      const newTag = await categoryService.getCategoryByName(tag.name);
      if (newTag) {
        return newTag;
      } else {
        return tag;
      }
    }),
  );
  const categoryIds = await Promise.all(
    categories.map(
      async (category) => await categoryService.createCategoryByUser(category),
    ),
  );

  //投稿とカテゴリーの中間テーブルに各ID保存
  const categoryRelations = await Promise.all(
    categoryIds.map(
      async (categoryId: Category) =>
        await categoryRelationService.createCategoryRelationByPost(
          post.id,
          categoryId.id,
        ),
    ),
  );

  return NextResponse.json(post);
}

//投稿を編集、カテゴリー編集
export async function PUT(request: Request) {
  // Post
  const postRepository = createPostRepository();
  const postService = createPostService(postRepository);

  // Category
  const categoryRepository = createCategoryRepository();
  const categoryService = createCategoryService(categoryRepository);

  // CategoryRelation
  const categoryRelationRepository = CreatecategoryRelationRepository();
  const categoryRelationService = createCategoryRelationService(
    categoryRelationRepository,
  );

  const body = await request.json();

  const { title, contents, postId, thumbnail, userId, postFormatBaseId, tags } =
    body;

  const postBody = {
    title,
    contents,
    thumbnail,
    userId,
    postId,
    postFormatBaseId,
  };

  // 投稿を更新
  const post = await postService.updatePostByUser(postBody);

  // 現在のカテゴリを取得
  const currentCategories =
    await categoryRelationService.getCategoryRelationByPost(post.id);

  //タグの名前のリストを作成
  const newTagNames = tags.map((tag) => tag.name);

  // 削除されたカテゴリを特定
  const categoriesToDelete = currentCategories.filter(
    (category) => !newTagNames.includes(category.Category.name),
  );

  // 先にカテゴリリレーションテーブルからカテゴリIDを使い、データベースから削除（外部制約違反を起こさないため）
  await Promise.all(
    categoriesToDelete.map(async (category) => {
      await categoryRelationService.deleteCategoryRelationByCategoryId(
        category.Category.id,
      );
    }),
  );
  // カテゴリテーブルからカテゴリIDを使い、データベースから削除
  await Promise.all(
    categoriesToDelete.map(async (category) => {
      await categoryService.deleteCategoryByCategoryId(category.Category.id);
    }),
  );

  // 新しいカテゴリの処理
  const categoryIds = (
    await Promise.all(
      tags.map(async (tag) => {
        const existingCategory = await categoryService.getCategoryByName(
          tag.name,
        );
        if (existingCategory) {
          return undefined;
        } else {
          return await categoryService.createCategoryByUser(tag);
        }
      }),
    )
  ).filter((id: string) => id !== undefined);

  //  //投稿とカテゴリーの中間テーブルに各ID保存
  const categoryRelations = await Promise.all(
    categoryIds.map(
      async (categoryId: Category) =>
        await categoryRelationService.createCategoryRelationByPost(
          post.id,
          categoryId.id,
        ),
    ),
  );

  return NextResponse.json(post);
}
