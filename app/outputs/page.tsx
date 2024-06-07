import { postsAll } from '@/action/post/postsAll';

import CardList from '@/features/outputs/components/CardList/CardList';
import PageTitle from '@/features/outputs/components/Title/PageTitle';
import Link from 'next/link';
import { HiOutlinePencil } from 'react-icons/hi';

const outputsPage = async () => {
  const posts = await postsAll();
  return (
    <div className="mx-auto mt-6 max-w-[880px] px-5 ">
      <div className="flex justify-end mb-6 hover:opacity-70">
        <Link href={'/outputs/posts/create'} className="flex items-center gap-1">
          <HiOutlinePencil width={30} height={30} />
          <span className="text-base">投稿を作成</span>
        </Link>
      </div>
      <PageTitle>OUTPUTS</PageTitle>
      {/* <CategoryList categories={categories}/> */}
      <CardList posts={posts} />
    </div>
  );
};

export default outputsPage;
