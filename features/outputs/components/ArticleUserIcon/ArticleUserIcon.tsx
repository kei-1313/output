import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleUserIcon = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href={'/settings'} className="w-[56px] rounded-full">
        <Image
          src={'/images/dammy.png'}
          className="w-[56px] rounded-full"
          width={56}
          height={56}
          alt="dammy"
        />
      </Link>
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
