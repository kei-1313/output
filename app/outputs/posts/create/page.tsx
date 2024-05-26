'use client';

import { useEffect, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import CreateFooter from '@/features/outputs/components/Footer/CreateFooter';
import PostFormTitle from '@/features/outputs/components/PostForm/Title/PostFormTitle';
import PostFormBody from '@/features/outputs/components/PostForm/Body/PostFormBody';
import PrevieContent from '@/features/outputs/components/PreviewContent/PrevieContent';
import Link from 'next/link';
import SubmitButton from '@/features/outputs/components/Button/SubmitButton';
import TagSettings from '@/features/outputs/components/TagSettings/TagSettings';
import PreviewButton from '@/features/outputs/components/Button/PreviewButton';
import { FaArrowLeft } from 'react-icons/fa';

interface Tags {
  id: string;
  label: string;
  name: string;
  icon: string;
}

const OutputsCreatePage = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [source, setSource] = useState('');

  const [isPreview, setPreview] = useState(false);

  const [tags, setTags] = useState<Tags[]>([]);

  // localstorageに保存されている場合、初期表示させる
  useEffect(() => {
    const ArticleTitle = localStorage.getItem('ArticleTitle');
    const ArticleContent = localStorage.getItem('ArticleContent');
    if (ArticleTitle) {
      setTitle(ArticleTitle);
    }
    if (ArticleContent) {
      setSource(ArticleContent);
    }
  }, []);

  //投稿をPOSTする
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: title,
      contents: source,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      //空白の場合
      if (!data.title || !data.contents) {
        throw Error('入力してください');
      }

      const newPost = {
        title: data.title,
        contents: data.contents,
        thumbnail: 'thumbnail',
        userId: 'cluf8ddnh0001fwhr0nwcwso0',
        tags: tags,
      };

      const res = await fetch('/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      reset();
      router.push('/outputs');
    } catch (error) {
      //エラー処理
      console.error(error);
    }
  };

  //プレビューの表示、非表示
  const handlePreviewClick = () => {
    setPreview(!isPreview);
  };

  return (
    <form className="min-h-screen" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-14 items-center justify-between gap-2 px-4">
        <div className="lg:flex-1">
          <Link
            href={'/outputs'}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition duration-300 hover:bg-sky-50"
          >
            <FaArrowLeft
              width={20}
              height={20}
              className="mx-auto text-gray-400"
            />
          </Link>
        </div>
        <div className="flex-1 lg:justify-center">
          <div className="lg:text-center">
            <SubmitButton />
          </div>
        </div>
        <div className="mr-4 flex flex-1 items-center justify-end gap-8">
          <TagSettings tags={tags} setTags={setTags} categoies={[]}/>
          <PreviewButton
            handlePreviewClick={handlePreviewClick}
            isPreview={isPreview}
          />
        </div>
      </div>
      {/* <CreateHeader handlePreviewClick={handlePreviewClick} isPreview={isPreview}/> */}
      <div className="mx-auto max-w-[580px] px-6 py-24">
        {isPreview ? (
          <PrevieContent source={source} title={title} />
        ) : (
          <>
            <div className="mb-8">
              <PostFormTitle
                register={register('title')}
                title={title}
                setTitle={setTitle}
                action={"create"}
              />
            </div>
            <div>
              <PostFormBody
                register={register('contents')}
                source={source}
                setSource={setSource}
                action={"create"}
              />
            </div>
          </>
        )}
      </div>
      <CreateFooter length={source.length} />
    </form>
  );
};

export default OutputsCreatePage;
