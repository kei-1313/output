'use client';
import { useState } from 'react';
import TagForm from '../TagForm/TagForm';

interface Tags {
  id: string;
  label: string;
  name: string;
  icon: string;
}

interface TagSettingsProps {
  tags: Tags[];
  setTags: React.Dispatch<React.SetStateAction<Tags[]>>;
}

const TagSettings = ({ tags, setTags }: TagSettingsProps) => {
  const [isTagModalShow, setIsTagModalShow] = useState(false);
  //タグモーダルの開閉
  const handleShowTagModal = () => {
    setIsTagModalShow(!isTagModalShow);
  };
  return (
    <div className="relative flex items-center gap-2">
      <button
        type="button"
        onClick={handleShowTagModal}
        className="cursor-pointer rounded-full px-3 py-1 transition duration-300 hover:bg-slate-300/50"
      >
        {isTagModalShow ? (
          <span className="text-sm text-slate-500">閉じる</span>
        ) : (
          <span className="text-sm text-slate-500">
            #タグ
            <span className="ml-1 inline-block text-sm text-slate-500">
              {tags.length > 0 ? tags.length : ''}
            </span>
          </span>
        )}
      </button>
      {isTagModalShow ? <TagForm tags={tags} setTags={setTags} /> : <></>}
    </div>
  );
};

export default TagSettings;
