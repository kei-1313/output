import { string } from 'zod';

interface createCategoryByUserProps {
  body: {
    label: string;
    name: string;
    icon: string;
  };
}

export const createCategoryService = (categoryRepository: any) => {
  return {
    getCategoryAll: async (postId: string) => {
      return await categoryRepository.findCategoryAll(postId);
    },
    getCategoryByName: async (name: string) => {
      return await categoryRepository.findCategoryByName(name);
    },
    createCategoryByUser: async (body: createCategoryByUserProps) => {
      return await categoryRepository.saveCategoryByUser({ ...body });
    },
  };
};
