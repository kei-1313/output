
import React from 'react';
import Avatar from '../Avatar/Avatar';
import Link from 'next/link';
import { User } from '@/types/types';
import { signOut } from '@/lib/auth';

interface LoginUserInfoProps {
  href: string;
  src: string | undefined;
  username: string;
  width: number;
  height: number;
  user: User | null;
}

const LoginUserInfo = ({
  href,
  src,
  username,
  width,
  height,
  user,
}: LoginUserInfoProps) => {

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Avatar
          href={href}
          src={src || ''}
          width={width}
          height={height}
          alt={username}
        />
        <div>
          <Link className="text-sm leading-normal" href={href}>
            @{user?.name}
          </Link>
        </div>
      </div>
      <form
          action={async () => {
            // signOut() Method will be declared later
            'use server';
            await signOut();
          }}
        >
          <button className="text-sm bg-red-600 text-white px-4 py-2 rounded-lg hover:opacity-80">ログアウト</button>
      </form>
    </div>
  );
};

export default LoginUserInfo;
