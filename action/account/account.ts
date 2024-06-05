import { auth } from "@/lib/auth"

import { createAccountRepository } from '@/repository/account/AccountRepository';
import { createAccountService } from "@/service/account/AccountService";

export const account = async () => {
  const session = await auth();
  //セッションがない場合
  if(!session) return null;

  //セッションがある場合
  const accountRepository = createAccountRepository();
  const accountService = createAccountService(accountRepository);
  if(session.user?.id) {
    const accountUser = await accountService.getAccountByUserId(session.user.id);
    console.log(accountUser);
    return accountUser;
  } else {
    console.error("ユーザIDが見つかりません")
    return null;
  }
};
