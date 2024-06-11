import { createLikesRepository } from "@/repository/likes/LikesRepository";
import { createLikesService } from "@/service/likes/LikesService";

const likedPost = async (postId:string, userId:string) => {
  const likesRepository = createLikesRepository();
  const likesService = createLikesService(likesRepository);
  const likes = await likesService.getLikedPost(postId, userId);

  if(!likes) return false;
  return likes;
}

export default likedPost;
