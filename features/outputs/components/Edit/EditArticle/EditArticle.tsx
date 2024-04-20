import Link from "next/link";
import { HiOutlinePencil } from "react-icons/hi";
interface EditArticleProps {
  href: string;
}

const EditArticle = ({href} : EditArticleProps) => {
  return (
    <Link href={href} className="flex gap-1 items-center">
      <HiOutlinePencil width={30} height={30}/>
      <span className="text-base">記事を編集</span>
    </Link>
  )
}

export default EditArticle
