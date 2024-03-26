"use client"

import Image from "next/image"
import Link from "next/link"
import { IoMdHeartEmpty } from "react-icons/io";


const Card = () => { 
	return (
		<li className="flex gap-3">
      <Link href="/" className="w-[92px] h-[92px] border-[1px] border-solid border-slate-300 bg-white rounded-lg flex items-center justify-center">
        <Image src="/images/dammy.png" width={40} height={40} alt="dammy"/>
      </Link>
      <div>
        <Link href="/">
          <h2 className="text-black text-base font-bold leading-6">Reactを学習できるサービスmosya Reactの技術的な紹介</h2>
        </Link>
        <div className="flex gap-2 mt-2 items-center">
          <div className="">
            <Image className="rounded-full" src="/images/dammy.png" width={26} height={26} alt="dammy"/>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-black text-[13px]">ユーザ名</span>
            <span className="text-gray-500 text-[12px]">1日前</span>
            <div className="flex gap-1 items-center">
              <IoMdHeartEmpty className="text-gray-400"/>
              <span className="text-gray-400 text-[12px]">190</span>
            </div>
          </div>
        </div>
      </div>
    </li>
	)
}

export default Card

