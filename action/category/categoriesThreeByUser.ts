import { postByUser } from '../post/postByUser';
import { Post } from '@/types/Post/Post'


export const categoriesThreeByUser = async (userId: string) => {
  const posts = await postByUser(userId);
  const categories = posts.map((post: Post, index: number) => {
    return post.CategoryRelations.map(rel => rel.Category);
  }).flat();

  if(categories) {
    return categories;
  }

  return [];
}
