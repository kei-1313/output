import { createPostRepository } from '@/repository/post/PostRepository';
import { createPostService } from '@/service/post/PostService';

export const postByUser = async (userId: string, count: number) => {
  const postRepository = createPostRepository();
  const postService = createPostService(postRepository);
  const post = await postService.getPostByUser(userId, count);

  return post;
};
