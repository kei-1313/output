import { PrismaAdapter } from '@auth/prisma-adapter';
import { User } from '@prisma/client';
// import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from '../auth.config';
import prisma from './db';

async function getUser(email: string): Promise<User | null> {
  try {
    console.log('Fetching User');

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch User:', error);
    throw new Error('Failed to fetch User');
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      /**
       * @param credentials ログインフォームから送信されたデータ
       * @returns User | null
       * @description 認証時に呼び出される関数
       */
      async authorize(credentials) {
        /**
         * ログインフォームから送信されたデータを検証
         * successプロパティとdataプロパティを持つオブジェクト
         */
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(8) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          // hashedpasswordが存在しない場合もnullを返す
          if (!user || !user.hashedpassword) return null;

          const bcrypt = await require('bcrypt');

          const passwordsMatch = await bcrypt.compare(
            password,
            user.hashedpassword,
          );

          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
