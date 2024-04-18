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
  };
};
