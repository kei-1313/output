import prisma from '@/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';

import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import bcrypt from 'bcrypt';

type User = {
  id: string;
  name: string;
  profile: string;
  email: string | null;
  hashedpassword: string | null;
};

async function getUser(email: string): Promise<User | null | undefined> {
  try {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error('ユーザーが見つかりませんでした。');
  }
}

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    Credentials({
      async authorize(credentials) {
        const user = await getUser(credentials.email);
        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashedpassword,
        );

        if (passwordsMatch) return user;

        return null;
      },
    }),
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
