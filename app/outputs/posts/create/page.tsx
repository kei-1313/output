"use client"

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeExternalLinks from 'rehype-external-links'
import ArticleLength from "@/features/outputs/components/ArticleLength/ArticleLength";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


interface Tag {
  id: number;
  text: string;
}

const outputsCreatePage = () => {
  const [source, setSource] = useState('')
  const [tags, setTags] = useState<Tag[]>([])
  const [tagText, setTagText] = useState('')
  const [isTagModalShow, setIsTagModalShow] = useState(false)

  //タグモーダルの開閉
  const handleShowTagModal = () => {
    setIsTagModalShow(!isTagModalShow)
  }

  //入力値をタグにする
  const handleEnterTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //入力値があり、Enterが押された場合
    if (event.key === 'Enter' && tagText.trim() !== '') {
      event.preventDefault();
      const addId = tags.length + 1
      const newTag = {
        id: addId,
        text: tagText.trim()
      }

      setTags(prevTags => [...prevTags, newTag])
      setTagText('')
    }
  }

  //入力したタグを削除する
  const handleDeleteTag = (id: number) => {
    setTags(prevTags => prevTags.filter(tag => tag.id !== id));
  }

  //以前追加したタグを追加する
  const handleClickLastTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const addId = tags.length + 1
    const newTag = {
      id: addId,
      text: event.currentTarget.innerHTML.trim()
    }

    setTags(prevTags => [...prevTags, newTag])
  }

  //投稿をPOSTする
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset
  } = useForm<FieldValues>(
    {
      defaultValues: {
        title: '',
        contents: ''
      }
    }
  )

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const newPost = {
        title: data.title,
        contents: data.contents,
        thumbnail: "thumbnail",
        userId: "cluf8ddnh0001fwhr0nwcwso0"
      }
      console.log(newPost);
      
      const res = await fetch('/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
    } catch (error) {
      //エラー処理
      console.error(error)
    }
  }

	return (
    <form className="min-h-screen" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-14 items-center justify-between gap-2 px-4">
        <div className="lg:flex-1">
          <button className="rounded-full w-[36px] h-[36px] hover:bg-sky-50 transition duration-300">
            <FaArrowLeft width={20} height={20} className="mx-auto text-gray-400"/>
          </button>
        </div>
        <div className="flex-1 lg:justify-center">
          <div className="lg:text-center">
            <button type="submit" className="w-20 text-center text-white text-sm rounded-full bg-cyan-950 py-1">保存</button>
          </div>
        </div>
        <div className="flex items-center gap-2 relative flex-1 justify-center">
          <div onClick={handleShowTagModal} className="cursor-pointer hover:bg-slate-300/50 transition duration-300 px-3 py-1 rounded-full">
          {isTagModalShow? (
            <span className="text-sm text-slate-500">閉じる</span>
          ):(
            <span className="text-sm text-slate-500">#タグ</span>
          )}
          </div>
          {isTagModalShow? (
            <div className="absolute top-9 right-0 w-72 border border-slate-300/50 rounded-t-xl text-sm leading-normal">
            <div className="flex flex-wrap gap-2 p-3">
                {tags?.map((tag, index) => (
                  <div className="flex gap-1 items-center border border-slate-300/50  rounded-full py-1 px-3" key={index}>
                    <span>{tag.text}</span>
                    <span onClick={() => handleDeleteTag(tag.id)} className="text-slate-300 cursor-pointer hover:text-slate-400 transition duration-300">✗</span>
                  </div>
                ))}
                <input className="outline-none" value={tagText} onChange={(event) => setTagText(event.target.value)} onKeyPress={handleEnterTag} type="text" name="" id="" placeholder="タグを追加"/>
            </div>
            <div>
              <div className="p-1.5 grid grid-cols-3 gap-2">
                <button onClick={handleClickLastTag} className="p-2.5 text-sm text-slate-600 block bg-slate-300/50 rounded-lg cursor-pointer">React</button>
                <button onClick={handleClickLastTag} className="p-2.5 text-sm text-slate-600 block bg-slate-300/50 rounded-lg cursor-pointer">React</button>
                <button onClick={handleClickLastTag} className="p-2.5 text-sm text-slate-600 block bg-slate-300/50 rounded-lg cursor-pointer">React</button>
              </div>
            </div>
            </div>
          ): (
            <></>
          )}
        </div>
      </div>
      <div className="max-w-[580px] mx-auto px-6 py-24">
        <div className="mb-8">
          <textarea
            {...register("title")}
            className="w-full outline-0 leading-relaxed text-xl bg-transparent resize-none"  
            onChange={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            placeholder="タイトル"
          />
        </div>
        <div>
          <textarea
            {...register("contents")}
            className='w-full outline-0 leading-relaxed bg-transparent resize-none'
            placeholder='本文を書く'
            value={source}
            onChange={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
              setSource(e.target.value)
            }
            }
            autoFocus
          />
        </div>
        <article className='w-full pt-5'>
          <Markdown
            className='prose min-w-full'
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSanitize,
              [rehypeExternalLinks,
              { content: { type: 'text', value: '🔗' } }
              ],
            ]}
          >
            {source}
          </Markdown>
        </article>
      </div>
      {/* create page footer */}
      <div className="flex justify-between px-8 fixed bottom-10 left-0 w-full">
          <div>

          </div>
          <div className="flex gap-3">
              <div>

              </div>
              <ArticleLength articleLength={source.length}/>
          </div>
        </div>
    </form>
	)
}

export default outputsCreatePage

