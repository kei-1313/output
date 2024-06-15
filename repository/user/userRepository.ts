import prisma from '@/lib/db';
import { User } from '@/types/types';

interface updateUserProps {
  userId: string;
  name: string;
  profile: string;
}

export const createUserRepository = () => {
  return {
    findUserById: async (userId: string) => {
      return await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
    },
    updateUser: async ({ userId, name, profile }: updateUserProps) => {
      //ユーザ名の更新
      if (name !== '' && profile === '') {
        return await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            name: name,
          },
        });
      }
      //ユーザプロフィールの更新
      if (name === '' && profile !== '') {
        return await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            profile: profile,
          },
        });
      }
    },
  };
};
