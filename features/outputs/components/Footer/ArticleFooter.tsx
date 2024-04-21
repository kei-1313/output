import LoginUserInfo from '@/features/utils/LoginUserInfo/LoginUserInfo';

const ArticleFooter = () => {
  return (
    <footer className="bg-footer pb-20 pt-14 max-md:pt-6">
      <div className="mx-auto flex w-full max-w-screen-lg px-6">
        <LoginUserInfo
          width={30}
          height={30}
          href={'/settings'}
          src={''}
          username={'dalmi'}
        />
      </div>
    </footer>
  );
};

export default ArticleFooter;
