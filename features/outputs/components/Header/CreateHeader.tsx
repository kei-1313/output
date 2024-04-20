import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import TagSettings from '../TagSettings/TagSettings';
import Link from 'next/link';
import SubmitButton from '../Button/SubmitButton';

export const CreateHeader = () => {
  return (
    <div className="flex h-14 items-center justify-between gap-2 px-4">
      <div className="lg:flex-1">
        <Link
          href={'/outputs'}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition duration-300 hover:bg-sky-50"
        >
          <FaArrowLeft
            width={20}
            height={20}
            className="mx-auto text-gray-400"
          />
        </Link>
      </div>
      <div className="flex-1 lg:justify-center">
        <div className="lg:text-center">
          <SubmitButton />
        </div>
      </div>
      <TagSettings />
    </div>
  );
};
