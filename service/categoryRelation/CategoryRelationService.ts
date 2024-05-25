export const createCategoryRelationService = (
  categoryRelationRepository: any,
) => {
  return {
    createCategoryRelationByPost: async (
      postId: string,
      categoryId: string,
    ) => {
      return await categoryRelationRepository.saveCategoryRelationsByPost(
        postId,
        categoryId,
      );
    },
    getCategoryRelationByPost: async (postId: string) => {
      return await categoryRelationRepository.findCategoryRelationByPost(postId)
    },
    deleteCategoryRelationByCategoryId: async (categoryId: string) => {
      return await categoryRelationRepository.deleteCategoryRelationByCategoryId(categoryId)
    },
  };
};
