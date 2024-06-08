'use client';

import { useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface ProfileNameProps {
  userName: string | undefined;
  userId: string | undefined;
}

const ProfileName = ({ userName, userId }: ProfileNameProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(userName);

  const handleEditName = () => {
    setIsEdit(true);
  };
  const handleEditCancelName = () => {
    setIsEdit(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: name,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const updatedUser = {
        userId,
        name: data.name,
        profile: '',
      };
      const res = await fetch('/api/user/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-2xl border border-slate-300/50 p-6 md:p-7"
    >
      <h3 className="mb-3 text-base">表示名</h3>
      {isEdit ? (
        <input
          {...register('name')}
          className="mb-5 w-full rounded-lg border px-3 py-2.5 text-sm leading-normal outline-none transition-all disabled:cursor-not-allowed disabled:opacity-60"
          type="text"
          name="name"
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="表示名を入力"
        />
      ) : (
        <p className="mb-5 text-gray-400">{name}</p>
      )}
      {isEdit ? (
        <div className="flex justify-end gap-4">
          <button
            onClick={handleEditCancelName}
            className="text-sm text-gray-400 transition duration-300 hover:text-gray-700"
          >
            キャンセル
          </button>
          <button
            type={'submit'}
            className="rounded-full border border-slate-300/50 px-4 py-3 text-sm transition duration-300 hover:bg-slate-100"
          >
            保存する
          </button>
        </div>
      ) : (
        <button
          onClick={handleEditName}
          className="rounded-full border border-slate-300/50 px-4 py-3 text-sm transition duration-300 hover:bg-slate-100"
        >
          変更する
        </button>
      )}
    </form>
  );
};

export default ProfileName;
