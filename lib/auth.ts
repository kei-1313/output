import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
import prisma from './db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
});