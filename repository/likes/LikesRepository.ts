import prisma from '@/lib/db';

export const createLikesRepository = () => {
  return {
    findLikedPost: async (postId:string, userId:string) => {
      return await prisma.like.findFirst({
        where: {
          postId,
          userId
        }
      })
    },
    saveLikes: async (postId:string, userId: string) => {
      return await prisma.like.create({
        data: {
          postId,
          userId,
        }
      })
    },
    deleteLikes: async (id: string) => {
      return await prisma.like.delete({
        where: {
          id
        }
      })
    }
  }
}
