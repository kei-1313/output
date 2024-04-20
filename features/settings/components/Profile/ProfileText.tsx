'use client';

import { useState } from 'react';

const ProfileText = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');

  const handleEditName = () => {
    setIsEdit(true);
  };
  const handleEditCancelName = () => {
    setIsEdit(false);
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-300/50 p-6 md:p-7">
      <h3 className="mb-3 text-base">プロフィール文</h3>
      {isEdit ? (
        <textarea
          className="mb-5 w-full resize-none rounded-lg border px-3 py-2.5 text-sm leading-normal outline-none transition-all disabled:cursor-not-allowed disabled:opacity-60"
          name=""
          id=""
          value={name}
          onChange={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
            setName(e.target.value);
          }}
          placeholder="200字まで自由入力"
        ></textarea>
      ) : (
        <p className="mb-5 text-gray-400">
          本文下に好きな文章を表示することができます。
        </p>
      )}
      {isEdit ? (
        <div className="flex justify-end gap-4">
          <button
            onClick={handleEditCancelName}
            className="text-sm text-gray-400 transition duration-300 hover:text-gray-700"
          >
            キャンセル
          </button>
          <button className="rounded-full border border-slate-300/50 px-4 py-3 text-sm transition duration-300 hover:bg-slate-100">
            保存する
          </button>
        </div>
      ) : (
        <button
          onClick={handleEditName}
          className="rounded-full border border-slate-300/50 px-4 py-3 text-sm transition duration-300 hover:bg-slate-100"
        >
          登録する
        </button>
      )}
    </div>
  );
};

export default ProfileText;
