import { postById } from '@/action/post/postById';
import ArticleCategoryList from '@/features/outputs/components/ArticleCategoryList/ArticleCategoryList';
import ArticleContent from '@/features/outputs/components/ArticleContent/ArticleContent';
import ArticleDate from '@/features/outputs/components/ArticleDate/ArticleDate';
import ArticleHeader from '@/features/outputs/components/Header/ArticleHeader';
import ArticleUserIcon from '@/features/outputs/components/ArticleUserIcon/ArticleUserIcon';
import ArticleUserLinkHome from '@/features/outputs/components/ArticleUserLinkHome/ArticleUserLinkHome';
import ArticleFooter from '@/features/outputs/components/Footer/ArticleFooter';
import ArticleTitle from '@/features/outputs/components/Title/ArticleTitle';

const postDetailPage = async ({ params }: { params: { id: string } }) => {
  const post = await postById(params.id);
  console.log(post.CategoryRelations);

  return (
    <article>
      <ArticleHeader postId={params.id}/>
      <div className="mx-auto max-w-[580px] px-6 pb-24 pt-32 max-md:px-4">
        <div className="mb-10">
          <ArticleTitle title={post.title} />
        </div>
        <div className="mb-10">
          <ArticleDate
            createAt={post.created_at}
            width={38}
            height={38}
            href={'/settings'}
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
            href={'/settings'}
            src={post.User.image}
            username={post.User.name}
          />
        </div>
        <div className="flex justify-center">
          <ArticleUserLinkHome username={post.User.name} href={'/settings'} />
        </div>
      </div>
      <ArticleFooter />
    </article>
  );
};

export default postDetailPage;
