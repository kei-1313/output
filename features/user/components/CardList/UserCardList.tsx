import { Post } from '@/types/types';
import UserCard from '../Card/UserCard';

interface UserCardListProps {
  posts: Post[];
}

const UserCardList = ({ posts }: UserCardListProps) => {
  return (
    <div className="mx-auto max-w-[880px] px-4">
      <ul className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {posts?.map((post, index) => <UserCard post={post} key={post.id} />)}
      </ul>
    </div>
  );
};

export default UserCardList;
