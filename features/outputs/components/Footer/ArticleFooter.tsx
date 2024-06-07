import LoginUserInfo from '@/features/utils/LoginUserInfo/LoginUserInfo';
import { User } from '@/types/types';

interface ArticleFooterProps {
  user: User | null;
}

const ArticleFooter = ({user}: ArticleFooterProps) => {
  return (
    <footer className="bg-footer pb-20 pt-14 max-md:pt-6">
      <div className="mx-auto flex w-full max-w-screen-lg px-6">
        <LoginUserInfo
          width={30}
          height={30}
          href={'/settings'}
          src={user?.image}
          username={'dalmi'}
          user={user}
        />
      </div>
    </footer>
  );
};

export default ArticleFooter;
