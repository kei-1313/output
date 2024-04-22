import { NextResponse } from 'next/server';
import { createPostRepository } from '@/repository/post/PostRepository';
import { createPostService } from '@/service/post/PostService';
import { createCategoryRepository } from '@/repository/category/CategoryRepository';
import { createCategoryService } from '@/service/category/CategoryService';
import { CreatecategoryRelationRepository } from '@/repository/categoryRelation/CategoryRelationRepository';
import { createCategoryRelationService } from '@/service/categoryRelation/CategoryRelationService';

interface Tags {
  label: string;
  name: string;
  icon: string;
}

interface Category {
  id: string
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
  const categoryRelationService = createCategoryRelationService(categoryRelationRepository)

  const body = await request.json();

  const {title, contents, thumbnail, userId, tags} = body

  const postBody = {
    title,
    contents,
    thumbnail,
    userId,
  }

  // 投稿を保存
  const post = await postService.createPostByUser(postBody);

  //カテゴリがない場合
  if(tags.length === 0) {
    return NextResponse.json(post);
  }

  //カテゴリがある場合
  // creatManyでもいけそう
  const categories = await Promise.all(tags.map(async (tag: Tags) => {
    const newTag = await categoryService.getCategoryByName(tag.name);
    if(newTag) {
      return newTag
    } else {
      return tag
    }
  }));
  const categoryIds = await Promise.all(categories.map(async category => await categoryService.createCategoryByUser(category)))

  console.log(categoryIds, "カテゴリーID");

  //投稿とカテゴリーの中間テーブルに各ID保存
  const categoryRelations = await Promise.all(categoryIds.map(async (categoryId:Category) => await categoryRelationService.createCategoryRelationByPost(post.id, categoryId.id)))

  console.log(categoryRelations, "中間テーブル");


  return NextResponse.json(post);
}
