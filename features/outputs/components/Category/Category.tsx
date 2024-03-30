"use client"

import Image from "next/image"
import Link from "next/link"

interface CategoryProps {
  category: {
    id: string,
    category: string
  }
}

const Category:React.FC<CategoryProps> = ({category}) => {
  console.log(category);
	return (
		<li className="w-[62px] flex justify-center">
      <Link href="/" className="">
        <Image className="rounded-full" src="/images/dammy.png" width={56} height={56} alt="dammy"/>
        <span className="text-gray-500 text-[11px] block mt-2 text-center">{ category.category }</span>
      </Link>
    </li>
	)
}

export default Category

