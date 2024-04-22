interface createCategoryByUserProps {
  body: {
    label: string;
    name: string;
    icon: string
  }
}

export const createCategoryService = (categoryRepository: any) => {
  return {
    getCategoryIdAll: async() => {
      return await categoryRepository.findCategoryIdAll();
    },
    getCategoryByName: async(name: string) => {
      return await categoryRepository.findCategoryByName(name);
    },
    createCategoryByUser: async (body: createCategoryByUserProps) => {
      return await categoryRepository.saveCategoryByUser({ ...body });
    },
  };
};
