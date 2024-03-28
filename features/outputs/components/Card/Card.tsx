"use client"

import Image from "next/image"
import Link from "next/link"
import { IoMdHeartEmpty } from "react-icons/io";

interface CardProps {
  post: {
    username : string,
    title: string,
    body: string,
    likes: string,
    createAt : string
  }
	
}


const Card:React.FC<CardProps> = ({post}) => {
  
	return (
		<li className="grid grid-cols-card gap-3 max-md:">
      <Link href="/" className="w-[92px] h-[92px] border-[1px] border-solid border-slate-300 bg-white rounded-lg flex items-center justify-center">
        <Image src="/images/dammy.png" width={40} height={40} alt="dammy"/>
      </Link>
      <div>
        <Link href="/">
          <h2 className="text-black text-base font-bold leading-6">{post.title}</h2>
        </Link>
        <div className="flex gap-2 mt-2 items-center">
          <Link href="/" className="block">
            <Image className="rounded-full" src="/images/dammy.png" width={26} height={26} alt="dammy"/>
          </Link>
          <div className="flex gap-1 items-center">
            <Link href="/" className="block">
              <span className="text-black text-[13px]">{post.username}</span>
            </Link>
            <span className="text-gray-500 text-[12px] inline-block mt-1">{post.createAt}</span>
            <div className="flex gap-1 items-center">
              <IoMdHeartEmpty className="text-gray-400 inline-block mt-1"/>
              <span className="text-gray-400 text-[12px] inline-block mt-1">{post.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
	)
}

export default Card

