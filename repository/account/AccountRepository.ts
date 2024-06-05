import prisma from '@/lib/db';

export const createAccountRepository = () => {
  return {
    findAccountByUserId: async(userId:string) => {
      return await prisma.account.findFirst({
        where: {
          userId
        }
      })
    }
  }
}
