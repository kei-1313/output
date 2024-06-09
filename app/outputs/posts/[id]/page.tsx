import { postById } from '@/action/post/postById';

import ArticleCategoryList from '@/features/outputs/components/ArticleCategoryList/ArticleCategoryList';
import ArticleContent from '@/features/outputs/components/ArticleContent/ArticleContent';
import ArticleDate from '@/features/outputs/components/ArticleDate/ArticleDate';
import ArticleHeader from '@/features/outputs/components/Header/ArticleHeader';
import ArticleUserIcon from '@/features/outputs/components/ArticleUserIcon/ArticleUserIcon';
import ArticleUserLinkHome from '@/features/outputs/components/ArticleUserLinkHome/ArticleUserLinkHome';
import ArticleFooter from '@/features/outputs/components/Footer/ArticleFooter';
import ArticleTitle from '@/features/outputs/components/Title/ArticleTitle';
import { currentUser } from '@/action/user/currentUser';

const postDetailPage = async ({ params }: { params: { id: string } }) => {
  const post = await postById(params.id);
  const user = await currentUser();

  return (
    <article>
      {post.userId === user?.id ? (
        <ArticleHeader postId={params.id} isEdit={true} />
      ) : (
        <ArticleHeader postId={params.id} isEdit={false} />
      )}
      <div className="mx-auto max-w-[580px] px-6 pb-24 pt-32 max-md:px-4">
        <div className="mb-10">
          <ArticleTitle title={post.title} />
        </div>
        <div className="mb-10">
          <ArticleDate
            createAt={post.created_at}
            width={38}
            height={38}
            href={`/user/${post.User.id}`}
            src={post.User.image}
            username={post.User.name}
          />
        </div>
        <div className="mb-20">
          <ArticleContent content={post.PostFormatBases[0].contents} />
        </div>
        <div className="mb-20">
          <ArticleCategoryList categoryList={post.CategoryRelations} />
        </div>
        <div className="mb-20">
          <ArticleUserIcon
            width={56}
            height={56}
            href={`/user/${post.User.id}`}
            src={post.User.image}
            username={post.User.name}
          />
        </div>
        <div className="flex justify-center">
          <ArticleUserLinkHome username={user?.name} href={`/user/${post.User.id}`} />
        </div>
      </div>
      <ArticleFooter user={user} />
    </article>
  );
};

export default postDetailPage;
