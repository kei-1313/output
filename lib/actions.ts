'use server';

import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

const CreateUser = FormSchema.omit({});

/**
 * @description 認証をする
 * @param prevState アクション実行時のstate
 * @param formData フォームデータ
 */
export async function authenticate(prevState: boolean, formData: FormData) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
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

export async function createUser(formData: FormData) {
  const { name, email, password } = CreateUser.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
}
