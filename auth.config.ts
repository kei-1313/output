import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { getUserByEmail } from './lib/db';
import { LoginSchema } from './schemas';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    credentials({
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
        const parsedCredentials = LoginSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUserByEmail(email);
          if (!user || !user.hashedpassword) return null;

          const bcrypt = require('bcrypt');
          const passwordMatch = await bcrypt.compare(
            password,
            user.hashedpassword,
          );

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
