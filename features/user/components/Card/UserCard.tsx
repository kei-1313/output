import formatPostTime from "@/utils/date/formatPostTime"
import Image from "next/image"
import Link from "next/link"
import { IoMdHeartEmpty } from "react-icons/io"

const UserCard = () => {
  return (
    <li className="border-[1px] border-slate-200 rounded-xl">
      <Link href={'/'} className="flex flex-col flex-1">
        <div className="py-5 flex justify-center bg-user-card rounded-t-xl">
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png" width={70} height={70} alt=""/>
        </div>
        <div className="flex-1 px-4 pt-4">
          <p className="text-base font-bold">ミロカロスゲットしたぜ</p>
        </div>
        <div className="flex gap-1 px-[16px] pb-4 pt-2">
          <span className="mt-1 inline-block text-[12px] text-gray-500">
            {formatPostTime()}
          </span>
          <div className="flex items-center gap-1">
            <IoMdHeartEmpty className="mt-1 inline-block text-gray-400" />
            <span className="mt-1 inline-block text-[12px] text-gray-400">
              0
            </span>
            {/* {Number(post.likes) > 0 ? (
              <span className="mt-1 inline-block text-[12px] text-gray-400">
                {post.likes}
              </span>
            ) : (
              <span className="mt-1 inline-block text-[12px] text-gray-400">
                0
              </span>
            )} */}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default UserCard
