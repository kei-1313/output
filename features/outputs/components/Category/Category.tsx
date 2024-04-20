'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryProps {
  category: {
    id: string;
    category: string;
  };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <li className="flex w-[62px] justify-center">
      <Link href="/" className="">
        <Image
          className="rounded-full"
          src="/images/dammy.png"
          width={56}
          height={56}
          alt="dammy"
        />
        <span className="mt-2 block text-center text-[11px] text-gray-500">
          {category.category}
        </span>
      </Link>
    </li>
  );
};

export default Category;
