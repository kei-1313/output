import prisma from '@/lib/db';

export const createPostRepository = () => {
  return {
    findPostAll: async () => {
      return await prisma.post.findMany({
        include: {
          User: true,
          CategoryRelations: true,
          Likes: true,
        },
      });
    },
    findPostById: async (postId: string) => {
      return await prisma.post.findUnique({
        where: {
          id: postId
        },
        include: {
          User: true,
          PostFormatBases: true,
          CategoryRelations: true,
          Likes: true,
        }
      })
    }
  };
};
