'use client';
import { useState } from 'react';
import TagForm from '../TagForm/TagForm';

const TagSettings = () => {
  const [isTagModalShow, setIsTagModalShow] = useState(false);
  //タグモーダルの開閉
  const handleShowTagModal = () => {
    setIsTagModalShow(!isTagModalShow);
  };
  return (
    <div className="relative flex items-center gap-2">
      <button type="button"
        onClick={handleShowTagModal}
        className="cursor-pointer rounded-full px-3 py-1 transition duration-300 hover:bg-slate-300/50"
      >
        {isTagModalShow ? (
          <span className="text-sm text-slate-500">閉じる</span>
        ) : (
          <span className="text-sm text-slate-500">#タグ</span>
        )}
      </button>
      {isTagModalShow ? <TagForm /> : <></>}
    </div>
  );
};

export default TagSettings;
