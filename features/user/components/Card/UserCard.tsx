import { Post } from "@/types/types"
import formatPostTime from "@/utils/date/formatPostTime"
import latestPostDate from "@/utils/date/latestPostDate"
import Image from "next/image"
import Link from "next/link"
import { IoMdHeartEmpty } from "react-icons/io"

interface UserCardProps {
  post: Post;
}

const UserCard = ({post}: UserCardProps) => {
  const isLatest = latestPostDate(post.created_at);
  return (
    <li className="border-[1px] border-slate-200 rounded-xl relative">
      {isLatest && (
        <span className="text-[12px] font-bold text-red-500 absolute top-2 left-3">NEW</span>
      )}
      <Link href={`/outputs/posts/${post.id}`} className="flex flex-col flex-1">
        <div className="py-5 flex justify-center bg-user-card rounded-t-xl">
          {post.thumbnail? (
            <Image src={post.thumbnail} width={70} height={70} alt=""/>
          ):(
            <Image src="/images/dammy.png" width={70} height={70} alt="dammy"/>
          )}
        </div>
        <div className="flex-1 px-4 pt-4">
          <p className="text-base font-bold">{ post.title }</p>
        </div>
        <div className="flex gap-1 px-[16px] pb-4 pt-2">
          <span className="mt-1 inline-block text-[12px] text-gray-500">
            {formatPostTime(post.created_at)}
          </span>
          <div className="flex items-center gap-1">
            <IoMdHeartEmpty className="mt-1 inline-block text-gray-400" />
            {Number(post.Likes.length) > 0 ? (
              <span className="mt-1 inline-block text-[12px] text-gray-400">
                {post.Likes.length}
              </span>
            ) : (
              <span className="mt-1 inline-block text-[12px] text-gray-400">
                0
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default UserCard
