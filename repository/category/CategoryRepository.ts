import prisma from '@/lib/db';

interface saveCategoryByUser {
  label: string;
  name: string;
  icon: string
}

export const createCategoryRepository = () => {
  return {
    findCategoryIdAll: async() => {
      return await prisma.category.findMany({
        select: {
          id: true
        }
      })
    },
    findCategoryByName: async(name: string) => {
      return await prisma.category.findUnique({
        where: {
          name
        }
      })
    },
    saveCategoryByUser: async({label, name, icon}: saveCategoryByUser) => {
      return await prisma.category.create({
        data: {
          label,
          name,
          icon,
        },
        select: {
          id: true
        }
      })
    }
  }
}
