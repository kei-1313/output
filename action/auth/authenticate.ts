'use server';

import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

/**
 * @description 認証をする
 * @param prevState アクション実行時のstate
 * @param formData フォームデータ
 */
export async function authenticate(prevState: boolean, formData: FormData) {
  const parsedData = FormSchema.parse(Object.fromEntries(formData));

  try {
    await signIn('credentials', parsedData);
    return true;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          console.log('Invalid credentials');
          return false;
        default:
          console.log('Something went wrong.');
          return false;
      }
    }
    console.log('hoge error');

    throw error;
  }
}
