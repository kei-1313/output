import { auth } from '@/lib/auth';
import { createUserRepository } from '@/repository/user/userRepository';
import { createUserService } from '@/service/user/UserService';
import { User } from '@/types/types';

export const currentUser = async (): Promise<User | null> => {
  const userRepository = createUserRepository();
  const userService = createUserService(userRepository);

  const session = await auth();
  //セッションがない場合
  if (!session || !session.user?.id) return null;

  //セッションがある場合
  const user = await userService.getUserById(session.user.id);
  return user as User;
};
