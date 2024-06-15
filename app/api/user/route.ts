import { NextResponse } from 'next/server';
import { createUserRepository } from '@/repository/user/userRepository';
import { createUserService } from '@/service/user/UserService';

//ユーザ情報の更新
export async function PUT(request: Request) {
  const userRepository = createUserRepository();
  const userService = createUserService(userRepository);

  const body = await request.json();

  const { userId, name, profile } = body;

  const userBody = {
    userId,
    name,
    profile,
  };

  const newUser = await userService.updateUser({ body: userBody });

  return NextResponse.json(newUser);
}
