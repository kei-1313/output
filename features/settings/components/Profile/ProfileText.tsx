'use client';

import SettingsLoading from '@/app/settings/loading';
import { useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface ProfileTextProps {
  userProfile: string | undefined;
  userId: string | undefined;
}

const ProfileText = ({ userProfile, userId }: ProfileTextProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState(userProfile ?? '');
  const [isLoading, setIsLoading] = useState(false);

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
      profile: profile,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const updatedUser = {
        userId,
        name: '',
        profile: data.profile,
      };
      const res = await fetch('/api/user/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="m-auto flex w-[30px] justify-center p-6 md:p-7">
        <SettingsLoading />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-2xl border border-slate-300/50 p-6 md:p-7"
    >
      <h3 className="mb-3 text-base">プロフィール文</h3>
      {isEdit ? (
        <textarea
          {...register('profile')}
          className="mb-5 w-full resize-none rounded-lg border px-3 py-2.5 text-sm leading-normal outline-none transition-all disabled:cursor-not-allowed disabled:opacity-60"
          name="profile"
          id=""
          value={profile}
          onChange={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
            setProfile(e.target.value);
          }}
          placeholder="200字まで自由入力"
        ></textarea>
      ) : profile ? (
        <p className="mb-5 text-gray-400">{profile}</p>
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
          登録する
        </button>
      )}
    </form>
  );
};

export default ProfileText;
