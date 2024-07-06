interface CreatePostByUserProps {
  title: string;
  contents: string;
  thumbnail: string;
  userId: string;
}
interface UpdatePostByUserProps {
  title: string;
  contents: string;
  thumbnail: string;
  userId: string;
  postId: string;
  postFormatBaseId: string;
}

export const createPostService = (postRepository: any) => {
  return {
    getPostAll: async () => {
      return await postRepository.findPostAll();
    },
    getPostById: async (postId: string) => {
      return await postRepository.findPostById(postId);
    },
    getPostByUser: async (userId: string, count: number) => {
      return await postRepository.findPostByUser(userId, count);
    },
    createPostByUser: async (body: CreatePostByUserProps) => {
      return await postRepository.savePostByUser({ ...body });
    },
    updatePostByUser: async (body: UpdatePostByUserProps) => {
      return await postRepository.updatePostByUser({ ...body });
    },
  };
};
