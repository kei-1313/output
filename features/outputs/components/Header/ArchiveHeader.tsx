'use client'

import removeLocalStorage from "@/utils/localstorage/removeLocalStorage"
import Image from "next/image"
import Link from "next/link"
import { HiOutlinePencil } from "react-icons/hi"

interface ArchiveHeaderProps {
  image: string | undefined;
}

const ArchiveHeader = ({image}:ArchiveHeaderProps) => {
  const handleCreateLocalStorageClick = () => {
    removeLocalStorage('ArticleTitle','ArticleContent')
  }

  return(
    <div className="flex justify-end px-4">
        <div className="flex gap-4">
          <Link href={'/settings'} className="">
            {image ? (
              <Image
                className="rounded-full"
                src={image}
                width={32}
                height={32}
                alt=""
              />
            ) : (
              <Image
                className="rounded-full"
                src={'/images/dammy.png'}
                width={32}
                height={32}
                alt=""
              />
            )}
          </Link>
          <Link
            href={'/outputs/posts/create'}
            className="flex items-center gap-1 hover:opacity-70"
            onClick={handleCreateLocalStorageClick}
          >
            <HiOutlinePencil width={30} height={30} />
            <span className="text-base">投稿する</span>
          </Link>
        </div>
      </div>
  )
}

export default ArchiveHeader
