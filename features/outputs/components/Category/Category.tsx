"use client"

import Image from "next/image"
import Link from "next/link"

const Category = () => { 
	return (
		<li className="w-[62px] flex justify-center">
      <Link href="/" className="">
        <Image className="rounded-full" src="/images/dammy.png" width={56} height={56} alt="dammy"/>
        <span className="text-gray-500 text-[11px] block mt-2 text-center">React</span>
      </Link>
    </li>
	)
}

export default Category

