export const createPostService = (postRepository: any) => {
  return {
    getPostAll: async () => {
      return await postRepository.findPostAll();
    },
    getPostById: async (postId:string) => {
      return await postRepository.findPostById(postId);
    }
  };
};
