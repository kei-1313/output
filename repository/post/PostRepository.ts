import prisma from "@/lib/db"

export const createPostRepository = () => {
  return {
    findPostAll: async () => {
      return await prisma.post.findMany()
    }
  }
}