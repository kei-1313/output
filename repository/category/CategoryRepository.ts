import prisma from '@/lib/db';

interface saveCategoryByUser {
  label: string;
  name: string;
  icon: string;
}
interface updateCategoryByUser {
  postId: string;
  categoryId: string;
  category: {
    id: string;
    label: string;
    name: string;
    icon: string;
  }
}

export const createCategoryRepository = () => {
  return {
    findCategoryAll: async (postId: string) => {
      return await prisma.category.findMany({
        where: {
          id: postId,
        },
      });
    },
    findCategoryByName: async (name: string) => {
      return await prisma.category.findUnique({
        where: {
          name,
        },
      });
    },
    saveCategoryByUser: async ({ label, name, icon }: saveCategoryByUser) => {
      return await prisma.category.create({
        data: {
          label,
          name,
          icon,
        },
        select: {
          id: true,
        },
      });
    },
    updateCategoryByUser: async ({ postId, categoryId, category }: updateCategoryByUser) => {
      if (!categoryId || !postId) {
        // categoryIdが空の場合、新しいカテゴリを作成
        return await prisma.category.create({
          data: {
            label: category.label,
            name: category.name,
            icon: category.icon
          },
          select: {
            id: true,
          },
        });
      } else {
        // categoryIdが提供されている場合、既存のカテゴリを更新
        return await prisma.category.update({
          where: {
            id: category.id
          },
          data: {
            label: category.label,
            name: category.name,
            icon: category.icon
          },
        });
      }
    },
  };
};
