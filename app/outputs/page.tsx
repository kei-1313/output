import { Suspense } from 'react';

import { postsAll } from '@/action/post/postsAll';
import { currentUser } from '@/action/user/currentUser';

import CardList from '@/features/outputs/components/CardList/CardList';
import PageTitle from '@/features/outputs/components/Title/PageTitle';
import Loading from './loading';
import ArchiveHeader from '@/features/outputs/components/Header/ArchiveHeader';

const outputsPage = async () => {
  const posts = await postsAll();
  const user = await currentUser();

  return (
    <div className="mt-6 pb-20">
      <ArchiveHeader image={user?.image} />
      <div className="mx-auto mt-5  max-w-[880px] px-5 ">
        <PageTitle>OUTPUTS</PageTitle>
        {/* <CategoryList categories={categories}/> */}
        <Suspense fallback={<Loading />}>
          <CardList posts={posts} />
        </Suspense>
      </div>
    </div>
  );
};

export default outputsPage;
