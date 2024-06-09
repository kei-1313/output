import { createUserRepository } from "@/repository/user/userRepository";
import { createUserService } from "@/service/user/UserService";

const userById = async (userId: string) => {
  const userRepository = createUserRepository();
  const userService = createUserService(userRepository);
  const user = await userService.getUserById(userId)

  if(!user) return {};

  return user;
}

export default userById;
