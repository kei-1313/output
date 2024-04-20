import React from 'react';
import Avatar from '../Avatar/Avatar';
import Link from 'next/link';

interface LoginUserInfoProps {
  href: string;
  src: string;
  username: string;
  width: number;
  height: number;
}

const LoginUserInfo = ({
  href,
  src,
  username,
  width,
  height,
}: LoginUserInfoProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Avatar
          href={href}
          src={src}
          width={width}
          height={height}
          alt={username}
        />
        <div>
          <Link className="text-base leading-normal" href={href}>
            {username}
          </Link>
        </div>
      </div>
      <div>
        <button className="text-base">ログアウト</button>
      </div>
    </div>
  );
};

export default LoginUserInfo;
