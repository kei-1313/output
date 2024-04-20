'use client';

import { useState } from 'react';

interface Tag {
  id: number;
  text: string;
}
const TagForm = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagText, setTagText] = useState('');

  //入力値をタグにする
  const handleEnterTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //入力値があり、Enterが押された場合
    if (event.key === 'Enter' && tagText.trim() !== '') {
      event.preventDefault();
      const addId = tags.length + 1;
      const newTag = {
        id: addId,
        text: tagText.trim(),
      };

      setTags((prevTags) => [...prevTags, newTag]);
      setTagText('');
    }
  };

  //入力したタグを削除する
  const handleDeleteTag = (id: number) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  };

  //以前追加したタグを追加する
  const handleClickLastTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const addId = tags.length + 1;
    const newTag = {
      id: addId,
      text: event.currentTarget.innerHTML.trim(),
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
            <span>{tag.text}</span>
            <span
              onClick={() => handleDeleteTag(tag.id)}
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
        <div className="grid grid-cols-3 gap-2 p-1.5">
          <button
            onClick={handleClickLastTag}
            className="block cursor-pointer rounded-lg bg-slate-300/50 p-2.5 text-sm text-slate-600"
          >
            React
          </button>
          <button
            onClick={handleClickLastTag}
            className="block cursor-pointer rounded-lg bg-slate-300/50 p-2.5 text-sm text-slate-600"
          >
            React
          </button>
          <button
            onClick={handleClickLastTag}
            className="block cursor-pointer rounded-lg bg-slate-300/50 p-2.5 text-sm text-slate-600"
          >
            React
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagForm;
