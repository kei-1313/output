import formatPostDate from '@/utils/date/formatPostDate';
import ArticleUserIcon from '../ArticleUserIcon/ArticleUserIcon';

interface ArticleDateProps {
  createAt: string;
  href: string;
  src: string;
  username: string;
  width: number;
  height: number;
}

const ArticleDate = ({
  createAt,
  href,
  src,
  username,
  width,
  height,
}: ArticleDateProps) => {
  return (
    <div className="flex items-center gap-3">
      <ArticleUserIcon
        href={href}
        src={src}
        width={width}
        height={height}
        username={username}
      />
      <div>
        <time className="text-gray-700">{formatPostDate(createAt)}</time>
      </div>
    </div>
  );
};

export default ArticleDate;
