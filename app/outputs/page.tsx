import { postsAll } from '@/action/post/postsAll';

import CardList from '@/features/outputs/components/CardList/CardList';
import PageTitle from '@/features/outputs/components/Title/PageTitle';

const outputsPage = async () => {
  const posts = await postsAll();
  return (
    <div className="mx-auto mt-[50px] max-w-[880px] px-5 ">
      <PageTitle>OUTPUTS</PageTitle>
      {/* <CategoryList categories={categories}/> */}
      <CardList posts={posts} />
    </div>
  );
};

export default outputsPage;
