import { Post } from '@/types/types';
import latestPostDate from '@/utils/date/latestPostDate';
import Image from 'next/image';

interface PokemonItemProps {
  post: Post;
}

const PokemonItem = ({ post }: PokemonItemProps) => {
  const isLatest = latestPostDate(post.created_at);
  console.log(isLatest);

  return (
    <>
      {post.thumbnail ? (
        <li className="relative rounded-xl border-[1px] border-slate-200">
          {isLatest && (
            <span className="absolute left-3 top-2 text-[12px] font-bold text-red-500">
              NEW
            </span>
          )}
          <div className="flex justify-center rounded-t-xl py-5">
            <Image src={post.thumbnail} width={70} height={70} alt="" />
          </div>
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default PokemonItem;
