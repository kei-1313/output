import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
import prisma, { getUserById } from './db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials') return true;

      if (user.id) {
        const existingUser = await getUserById(user.id);
        if (!existingUser?.emailVerified) return false;
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
});
