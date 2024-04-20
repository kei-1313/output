import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // api、静的ファイル、画像ファイルをmiddlewareの対象外にする
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
