'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '@/types/Category/Category';

interface Tags {
  id: string;
  label: string;
  name: string;
  icon: string;
}
interface TagFormProps {
  tags: Tags[];
  setTags: React.Dispatch<React.SetStateAction<Tags[]>>;
  categoies: Category[];
}

const TagForm = ({ tags, setTags, categoies }: TagFormProps) => {
  // const [tags, setTags] = useState<Tag[]>([]);
  const [tagText, setTagText] = useState('');

  //入力値をタグにする
  const handleEnterTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //入力値があり、Enterが押された場合
    if (event.key === 'Enter' && tagText.trim() !== '') {
      event.preventDefault();
      const newTag = {
        id: '',
        label: uuidv4(),
        name: tagText.trim(),
        icon: '',
      };

      setTags((prevTags) => [...prevTags, newTag]);
      setTagText('');
    }
  };

  //入力したタグを削除する
  const handleDeleteTag = (id: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.label !== id));
  };

  //以前追加したタグを追加する
  const handleClickLastTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newTag = {
      id: '',
      label: uuidv4(),
      name: event.currentTarget.innerHTML.trim(),
      icon: '',
    };

    setTags((prevTags) => [...prevTags, newTag]);
  };

  return (
    <div className="absolute left-[-89px] top-9 w-72 rounded-t-xl border border-slate-300/50 text-sm leading-normal">
      <div className="flex flex-wrap gap-2 p-3">
        {tags?.map((tag, index) => (
          <div
            className="flex items-center gap-1 rounded-full border  border-slate-300/50 px-3 py-1"
            key={index}
          >
            <span>{tag.name}</span>
            <span
              onClick={() => handleDeleteTag(tag.label)}
              className="cursor-pointer text-slate-300 transition duration-300 hover:text-slate-400"
            >
              ✗
            </span>
          </div>
        ))}
        <input
          className="outline-none"
          value={tagText}
          onChange={(event) => setTagText(event.target.value)}
          onKeyPress={handleEnterTag}
          type="text"
          name=""
          id=""
          placeholder="タグを追加"
        />
      </div>
      <div>
        <div className="flex flex-wrap gap-2 p-1.5">
          {categoies.length > 0 ? (
            <>
              {categoies?.map((category, index) => (
                <button
                  onClick={handleClickLastTag}
                  key={category.id}
                  className="block cursor-pointer rounded-lg bg-slate-300/50 p-2.5 text-sm text-slate-600"
                >
                  {category.name}
                </button>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagForm;
