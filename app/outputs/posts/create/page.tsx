'use client';

import { useEffect, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import CreateFooter from '@/features/outputs/components/Footer/CreateFooter';
import { CreateHeader } from '@/features/outputs/components/Header/CreateHeader';
import PostFormTitle from '@/features/outputs/components/PostForm/Title/PostFormTitle';
import PostFormBody from '@/features/outputs/components/PostForm/Body/PostFormBody';
import PrevieContent from '@/features/outputs/components/PreviewContent/PrevieContent';

const OutputsCreatePage = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");

  const [local, setLocal] = useState("")

  const [isPreview, setPreview] = useState(false)

  // localstorageに保存されている場合、初期表示させる
  useEffect(() => {
    const ArticleTitle = localStorage.getItem("ArticleTitle");
    const ArticleContent = localStorage.getItem("ArticleContent");
    if (ArticleTitle) {
      setTitle(ArticleTitle);
    }

    if(ArticleContent) {
      setSource(ArticleContent)
    }
    console.log("初期表示");
  }, []);

  //投稿をPOSTする
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      contents: '',
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
      };
      console.log(newPost);

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
    setPreview(!isPreview)
  }

  return (
    <form className="min-h-screen" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        value={local}
        onChange={(e) => {
          localStorage.setItem("local", e.target.value);
          localStorage.removeItem("Value")
          setLocal(e.target.value);
        }}
      />
      <CreateHeader handlePreviewClick={handlePreviewClick} isPreview={isPreview}/>
      <div className="mx-auto max-w-[580px] px-6 py-24">
      {isPreview? (
        <PrevieContent source={source} title={title}/>
        ):(
        <>
          <div className="mb-8">
            <PostFormTitle
              register={register('title')}
              title={title}
              setTitle={setTitle}
            />
          </div>
          <div>
            <PostFormBody
              register={register('contents')}
              source={source}
              setSource={setSource}
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
