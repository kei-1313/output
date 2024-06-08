'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface ProfileImageProps {
  userImage: string | undefined;
  userId: string | undefined;
}

const ProfileImage = ({ userImage }: ProfileImageProps) => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [fileMessage, setFileMessage] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(userImage);
  //ファイル選択のカスタマイズのためにinputへアクセス
  const inputRef = useRef<HTMLInputElement>(null!);

  const onProfileButtonClick = () => {
    // useRef<HTMLInputElement>のcurrent要素を呼び出し、ファイル選択画面を表示
    inputRef.current.click();
  };

  // 画像アップロード
  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFileMessage('');

    // ファイルが選択されていない場合
    if (!files || files?.length == 0) {
      setFileMessage('画像をアップロードしてください。');
      return;
    }

    const fileSize = files[0]?.size / 1024 / 1024; // size in MB
    const fileType = files[0]?.type; // MIME type of the file

    // 画像サイズが2MBを超える場合
    if (fileSize > 2) {
      setFileMessage('画像サイズを2MB以下にする必要があります。');
      return;
    }

    // ファイル形式がjpgまたはpngでない場合
    if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
      setFileMessage('画像はjpgまたはpng形式である必要があります。');
      return;
    }

    // 画像をセット
    setAvatar(files[0]);

    //アイコンを選択すると画像が切り替わる
    setAvatarUrl(window.URL.createObjectURL(files[0]));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-300/50 p-6 md:p-7">
      <div className="flex items-center gap-6">
        <div>
          {avatarUrl ? (
            <Image
              className="aspect-square rounded-full"
              src={avatarUrl}
              width={64}
              height={64}
              alt=""
            />
          ) : (
            <Image
              className="aspect-square rounded-full"
              src={'/images/dammy.png'}
              width={64}
              height={64}
              alt="dammy"
            />
          )}
        </div>
        <div>
          <input
            hidden
            ref={inputRef}
            type="file"
            id="avatar"
            onChange={onUploadImage}
          />
          <button
            onClick={onProfileButtonClick}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-300/50 px-4 text-sm transition duration-300 hover:bg-slate-100"
          >
            プロフィール画像を変更
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm text-red-500">{fileMessage}</p>
    </div>
  );
};

export default ProfileImage;
