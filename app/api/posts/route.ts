import { NextResponse } from 'next/server';
import { createPostRepository } from '@/repository/post/PostRepository';
import { createPostService } from '@/service/post/PostService';

//新規投稿を作成
export async function POST(request: Request) {
  const postRepository = createPostRepository();
  const postService = createPostService(postRepository);

  const body = await request.json();
  const post = await postService.createPostByUser(body);

  return NextResponse.json(post);
}
