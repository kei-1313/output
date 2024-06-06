// ここでの方は関数で返り値はpromise<T>になるはず、<T>とはpromiseが成功したときに期待される型
// Account型を定義する必要がある
export const createAccountService = (accountRepository: any) => {
  return {
    getAccountByUserId: async (userId: string) => {
      return await accountRepository.findAccountByUserId(userId);
    },
  };
};
