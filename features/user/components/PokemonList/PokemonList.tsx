import { Post } from "@/types/types";
import PokemonItem from "../PokemonItem/PokemonItem"

interface PokemonListProps {
  posts: Post[];
}

const PokemonList = ({posts}: PokemonListProps) => {
  return (
    <div className="max-w-[880px] mx-auto px-4">
      <ul className="grid grid-cols-6 gap-5 max-sm:grid-cols-2 max-md:grid-cols-4">
        {posts?.map((post, index) => (
          <PokemonItem post={post}/>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
