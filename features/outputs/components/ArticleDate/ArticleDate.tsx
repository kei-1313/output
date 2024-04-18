import Avatar from '@/features/utils/Avatar/Avatar'
import Link from 'next/link'
import React from 'react'

import formatPostDate from '@/utils/date/formatPostDate';

const ArticleDate = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar href={"/settings"} src={""} width={38} height={38} alt={"dammy"}/>
      <div>
        <Link
          className="text-base leading-normal sm:text-lg"
          href={'/settings'}
        >
          dalmi
        </Link>
      </div>
      <div>
        <time>{formatPostDate("2024/4/10")}</time>
      </div>
    </div>
  )
}

export default ArticleDate
