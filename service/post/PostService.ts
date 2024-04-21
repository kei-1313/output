interface createPostByUserProps {
  body: {
    title: string;
    contents: string;
    thumbnail: string;
    userId: string;
  };
}

export const createPostService = (postRepository: any) => {
  return {
    getPostAll: async () => {
      return await postRepository.findPostAll();
    },
    getPostById: async (postId: string) => {
      return await postRepository.findPostById(postId);
    },
    createPostByUser: async (body: createPostByUserProps) => {
      return await postRepository.savePostByUser({ ...body });
    },
  };
};
