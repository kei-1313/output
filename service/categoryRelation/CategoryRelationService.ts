
export const createCategoryRelationService = (categoryRelationRepository: any) => {
  return {
    createCategoryRelationByPost: async(postId:string, categoryId:string) => {
      return await categoryRelationRepository.saveCategoryRelationsByPost(postId, categoryId);
    }
  };
};
