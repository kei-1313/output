import { auth } from '@/lib/auth';
import { User } from '@/types/types';

export const currentUser = async (): Promise<User | null> => {
  const session = await auth();
  //セッションがない場合
  if (!session) return null;

  //セッションがある場合
  return session.user as User
};
