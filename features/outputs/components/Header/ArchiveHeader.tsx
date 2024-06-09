'use client';

import ToBackButton from '@/features/utils/ToBackButton/ToBackButton';
import removeLocalStorage from '@/utils/localstorage/removeLocalStorage';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePencil } from 'react-icons/hi';

interface ArchiveHeaderProps {
  image: string | undefined;
  isBackButton: boolean;
}

const ArchiveHeader = ({ image, isBackButton }: ArchiveHeaderProps) => {
  const handleCreateLocalStorageClick = () => {
    removeLocalStorage('ArticleTitle', 'ArticleContent');
  };

  return (
    <div className={isBackButton? 'flex px-4 justify-between items-center' : 'flex px-4 justify-end items-center'}>
      {isBackButton?
        (
          <div className="ml-2">
            <ToBackButton href={'/outputs'} width={30} height={53} />
          </div>
        ):
        (
          <></>
        )
      }
      <div className="flex gap-4">
        <Link href={'/settings'} className="">
          {image ? (
            <Image
              className="rounded-full"
              src={image}
              width={32}
              height={32}
              alt=""
            />
          ) : (
            <Image
              className="rounded-full"
              src={'/images/dammy.png'}
              width={32}
              height={32}
              alt=""
            />
          )}
        </Link>
        <Link
          href={'/outputs/posts/create'}
          className="flex items-center gap-1 hover:opacity-70"
          onClick={handleCreateLocalStorageClick}
        >
          <HiOutlinePencil width={30} height={30} />
          <span className="text-base">投稿する</span>
        </Link>
      </div>
    </div>
  );
};

export default ArchiveHeader;
