import { createPostRepository } from '@/repository/post/PostRepository';
import { createPostService } from '@/service/post/PostService';

export const postById = async (postId: string) => {
  const postRepository = createPostRepository();
  const postService = createPostService(postRepository);
  const post = await postService.getPostById(postId);

  return post;
};
