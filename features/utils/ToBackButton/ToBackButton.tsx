import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

interface ToBackButtonProps {
  href: string;
  width: number;
  height: number;
}

const ToBackButton = ({href, width, height} :ToBackButtonProps) => {
  return (
    <Link href={href} className="w-20">
      <FaArrowLeft width={width} height={height} className="hover:opacity-70"/>
    </Link>
  )
}

export default ToBackButton
