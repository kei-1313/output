import { Post } from '@/types/types';
import PokemonItem from '../PokemonItem/PokemonItem';

interface PokemonListProps {
  posts: Post[];
}

const PokemonList = ({ posts }: PokemonListProps) => {
  return (
    <div className="mx-auto max-w-[880px] px-4">
      <ul className="grid grid-cols-6 gap-5 max-md:grid-cols-4 max-sm:grid-cols-2">
        {posts?.map((post, index) => <PokemonItem post={post} key={post.id} />)}
      </ul>
    </div>
  );
};

export default PokemonList;
