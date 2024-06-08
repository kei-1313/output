interface updateUserProps {
  body: {
    userId: string;
    name: string;
    profile: string;
  };
}

export const createUserService = (userRepository: any) => {
  return {
    getUserById: async (userId: string) => {
      return await userRepository.findUserById(userId);
    },
    updateUser: async ({ body }: updateUserProps) => {
      return await userRepository.updateUser({ ...body });
    },
  };
};
