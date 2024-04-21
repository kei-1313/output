import prisma from '@/lib/db';

interface savePostByUserProps {
  userId: string;
  title: string;
  thumbnail: string;
  contents: string;
}

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
          id: postId,
        },
        include: {
          User: true,
          PostFormatBases: true,
          CategoryRelations: true,
          Likes: true,
        },
      });
    },
    savePostByUser: async ({
      userId,
      title,
      thumbnail,
      contents,
    }: savePostByUserProps) => {
      return await prisma.post.create({
        data: {
          userId,
          title,
          thumbnail,
          created_at: new Date(),
          updated_at: new Date(),
          PostFormatBases: {
            create: [
              {
                contents,
              },
            ],
          },
        },
      });
    },
  };
};
