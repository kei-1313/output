import Avatar from '@/features/utils/Avatar/Avatar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface ArticleUserProps {
  href: string;
  src: string;
  username: string;
  width: number;
  height: number;
}

const ArticleUserIcon = ({
  href,
  src,
  username,
  width,
  height,
}: ArticleUserProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        href={href}
        src={src}
        width={width}
        height={height}
        alt={username}
      />
      <div>
        <Link className="text-base leading-normal sm:text-lg" href={href}>
          {username}
        </Link>
      </div>
    </div>
  );
};

export default ArticleUserIcon;
