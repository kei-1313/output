import prisma from '@/lib/db';

interface savePostByUserProps {
  userId: string;
  title: string;
  thumbnail: string;
  contents: string;
}
interface updatePostByUserProps {
  postId: string;
  userId: string;
  title: string;
  thumbnail: string;
  contents: string;
  postFormatBaseId: string;
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
          CategoryRelations: {
            include: {
              Category: true,
            },
          },
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
    updatePostByUser: async ({
      postId,
      title,
      thumbnail,
      userId,
      contents,
      postFormatBaseId
    }: updatePostByUserProps) => {
      return await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          userId,
          title,
          updated_at: new Date(),
          thumbnail,
          PostFormatBases: {
            update: [
              {
                where: {
                  id: postFormatBaseId
                },
                data: {
                  contents,
                },
              },
            ],
          },
        }
      })
    }
  };
};
