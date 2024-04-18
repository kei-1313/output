import Avatar from '@/features/utils/Avatar/Avatar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleUserIcon = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar href={"/settings"} src={""} width={56} height={56} alt={"dammy"}/>
      <div>
        <Link
          className="text-base leading-normal sm:text-lg"
          href={'/settings'}
        >
          dalmi
        </Link>
      </div>
    </div>
  );
};

export default ArticleUserIcon;
