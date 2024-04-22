import prisma from '@/lib/db';

export const CreatecategoryRelationRepository = () => {
  return {
    saveCategoryRelationsByPost: async(postId: string, categoryId:string) => {
      return await prisma.categoryRelation.create({
        data: {
          postId,
          categoryId
        }
      })
    }
  }
}
