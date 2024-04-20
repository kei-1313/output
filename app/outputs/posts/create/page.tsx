'use client';

import { useState } from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeExternalLinks from 'rehype-external-links';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import CreateFooter from '@/features/outputs/components/Footer/CreateFooter';
import { CreateHeader } from '@/features/outputs/components/Header/CreateHeader';
import PostFormTitle from '@/features/outputs/components/PostForm/Title/PostFormTitle';
import PostFormBody from '@/features/outputs/components/PostForm/Body/PostFormBody';


const OutputsCreatePage = () => {
  const router = useRouter();
  const [source, setSource] = useState('');

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
      if(!data.title || !data.contents) {
        throw Error("入力してください");
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

  return (
    <form className="min-h-screen" onSubmit={handleSubmit(onSubmit)}>
      <CreateHeader/>
      <div className="mx-auto max-w-[580px] px-6 py-24">
        <div className="mb-8">
          <PostFormTitle register={register('title')}/>
        </div>
        <div>
          <PostFormBody register={register('contents')} source={source} setSource={setSource}/>
        </div>
        <article className="w-full pt-5">
          <Markdown
            className="prose min-w-full"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSanitize,
              [rehypeExternalLinks, { content: { type: 'text', value: '🔗' } }],
            ]}
          >
            {source}
          </Markdown>
        </article>
      </div>
      <CreateFooter length={source.length}/>
    </form>
  );
};

export default OutputsCreatePage;
