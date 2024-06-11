export const createLikesService = (likesRepository: any) => {
  return {
    getLikedPost: async (postId:string, userId:string) => {
      return await likesRepository.findLikedPost(postId, userId)
    },
    createLikes: async (postId:string, userId:string) => {
      return await likesRepository.saveLikes(postId, userId)
    },
    deleteLikes: async (id:string) => {
      return await likesRepository.deleteLikes(id)
    }
  }
}
