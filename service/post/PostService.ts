
export const createPostService = (postRepository:any) => {
  return {
    getPostAll: async () => {
      return await postRepository.findPostAll()
    }
  }
}