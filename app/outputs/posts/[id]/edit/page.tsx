import { categoriesThreeByUser } from '@/action/category/categoriesThreeByUser';
import { postById } from '@/action/post/postById';
import EditPage from '@/features/outputs/components/EditPage/EditPage';
import { Suspense } from 'react';
import Loading from './loading';
import { currentUser } from '@/action/user/currentUser';

const postDetailEditPage = async ({ params }: { params: { id: string } }) => {
  const post = await postById(params.id);
  const user = await currentUser();
  const categoies = user ? await categoriesThreeByUser(user?.id) : [];

  return (
    <Suspense fallback={<Loading />}>
      <EditPage post={post} postId={params.id} categoies={categoies} />
    </Suspense>
  );
};

export default postDetailEditPage;
