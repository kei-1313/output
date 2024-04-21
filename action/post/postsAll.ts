import { createPostRepository } from '@/repository/post/PostRepository';
import { createPostService } from '@/service/post/PostService';

export const postsAll = async () => {
  const postRepository = createPostRepository();
  const postService = createPostService(postRepository);
  const posts = await postService.getPostAll();

  return posts;
};
