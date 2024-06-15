'use server';

import { signIn } from '@/lib/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import { z } from 'zod';

/**
 * @description 認証をする
 * @param values ログインフォームの値
 */
export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      isSuccess: false,
      error: {
        message: validatedFields.error.message,
      },
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return {
      isSuccess: true,
      message: 'ログインに成功しました',
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            isSuccess: false,
            message: 'メールアドレスまたはパスワードが間違っています',
          };
        default:
          return {
            isSuccess: false,
            message: 'ログインに失敗しました',
          };
      }
    }

    throw error;
  }
}
