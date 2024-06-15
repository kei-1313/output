'use client';

import { Button } from '@/components/ui/button';
// NextAuthの返り値ではない
import { signIn } from 'next-auth/react';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const SocialButtons = () => {
  const handleClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="mt-8 flex items-center justify-center gap-10">
      <Button onClick={() => handleClick('github')} className="min-w-36">
        Github
      </Button>
      <Button onClick={() => handleClick('google')} className="min-w-36">
        Google
      </Button>
    </div>
  );
};
