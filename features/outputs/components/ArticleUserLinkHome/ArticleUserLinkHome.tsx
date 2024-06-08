import Link from 'next/link';
import { IoHome } from 'react-icons/io5';

interface ArticleUserLinkHomeProps {
  username: string | undefined;
  href: string;
}

const ArticleUserLinkHome = ({ username, href }: ArticleUserLinkHomeProps) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <IoHome width={20} height={20} />
      <span className="text-sm">{username}</span>
    </Link>
  );
};

export default ArticleUserLinkHome;
