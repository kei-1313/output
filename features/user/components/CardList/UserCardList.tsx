import { Post } from "@/types/types"
import UserCard from "../Card/UserCard"

interface UserCardListProps {
  posts: Post[];
}

const UserCardList = ({posts}: UserCardListProps) => {
  return (
    <div className="max-w-[880px] mx-auto px-4">
      <ul className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-md:grid-cols-2">
        {posts?.map((post, index) => (
          <UserCard post={post}/>
        ))}
      </ul>
    </div>
  )
}

export default UserCardList
