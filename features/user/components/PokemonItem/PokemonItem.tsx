import { Post } from "@/types/types";
import latestPostDate from "@/utils/date/latestPostDate";
import Image from "next/image"

interface PokemonItemProps {
  post: Post;
}

const PokemonItem = ({post}: PokemonItemProps) => {
  const isLatest = latestPostDate(post.created_at);
  console.log(isLatest);

  return (
    <>
      {post.thumbnail? (
        <li className="border-[1px] border-slate-200 rounded-xl relative">
          {isLatest && (
            <span className="text-[12px] font-bold text-red-500 absolute top-2 left-3">NEW</span>
          )}
          <div className="py-5 flex justify-center rounded-t-xl">
            <Image src={post.thumbnail} width={70} height={70} alt=""/>
          </div>
        </li>
      ):(
        <></>
      )}
    </>
  )
}

export default PokemonItem
