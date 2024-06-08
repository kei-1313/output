import prisma from '@/lib/db';

export const CreatecategoryRelationRepository = () => {
  return {
    saveCategoryRelationsByPost: async (postId: string, categoryId: string) => {
      return await prisma.categoryRelation.create({
        data: {
          postId,
          categoryId,
        },
      });
    },
    findCategoryRelationByPost: async (postId: string) => {
      return await prisma.categoryRelation.findMany({
        where: {
          postId,
        },
        select: {
          Category: true,
        },
      });
    },
    deleteCategoryRelationByCategoryId: async (categoryId: string) => {
      return await prisma.categoryRelation.deleteMany({
        where: {
          categoryId,
        },
      });
    },
  };
};
