import ToBackButton from '@/features/utils/ToBackButton/ToBackButton'
import React from 'react'

const ArticleHeader = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-4 h-14">
        <div className="ml-2">
          <ToBackButton href={"/outputs"} width={30} height={53}/>
        </div>
      </div>
    </header>
  )
}

export default ArticleHeader
