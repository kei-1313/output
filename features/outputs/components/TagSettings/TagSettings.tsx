'use client';
import { useState } from 'react';
import TagForm from '../TagForm/TagForm'

const TagSettings = () => {
  const [isTagModalShow, setIsTagModalShow] = useState(false);
   //タグモーダルの開閉
   const handleShowTagModal = () => {
    setIsTagModalShow(!isTagModalShow);
  };
  return (
    <div className="relative flex flex-1 items-center justify-center gap-2">
      <div
        onClick={handleShowTagModal}
        className="cursor-pointer rounded-full px-3 py-1 transition duration-300 hover:bg-slate-300/50"
      >
        {isTagModalShow ? (
          <span className="text-sm text-slate-500">閉じる</span>
        ) : (
          <span className="text-sm text-slate-500">#タグ</span>
        )}
      </div>
      {isTagModalShow ? (
        <TagForm/>
      ) : (
        <></>
      )}
    </div>
  )
}

export default TagSettings
