import { postsAll } from '@/action/post/postsAll';

import CardList from '@/features/outputs/components/CardList/CardList';
import PageTitle from '@/features/outputs/components/Title/PageTitle';
import Link from 'next/link';
import { Suspense } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import Loading from './loading';
import { currentUser } from '@/action/user/currentUser';
import Image from 'next/image';

const outputsPage = async () => {
  const posts = await postsAll();
  const user = await currentUser();
  return (
    <div className="mt-6">
      <div className="flex justify-end px-4">
        <div className="flex gap-4">
        <Link href={'/outputs'} className="">
          {user?.image? (
            <Image
              className="rounded-full"
              src={user.image}
              width={32}
              height={32}
              alt=""
            />
          ):(
            <Image
              className="rounded-full"
              src={'/images/dammy.png'}
              width={32}
              height={32}
              alt=""
            />
          )}
        </Link>
          <Link href={'/outputs/posts/create'} className="flex items-center gap-1 hover:opacity-70">
            <HiOutlinePencil width={30} height={30} />
            <span className="text-base">投稿する</span>
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-5  max-w-[880px] px-5">

        <PageTitle>OUTPUTS</PageTitle>
        {/* <CategoryList categories={categories}/> */}
        <Suspense fallback={<Loading/>}>
          <CardList posts={posts} />
        </Suspense>
      </div>
    </div>
  );
};

export default outputsPage;
