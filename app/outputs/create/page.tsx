"use client"

import { useCallback, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeExternalLinks from 'rehype-external-links'
import ArticleLength from "@/features/outputs/components/ArticleLength/ArticleLength";

const outputsCreatePage = () => {
  const [source, setSource] = useState('')
  const [tags, setTags] = useState([
    {
      id: 1,
      text: 'React'
    }
  ])

	return (
    <form className="min-h-screen">
      <div className="flex h-14 items-center justify-between gap-2 px-4">
        <div>
          <button className="rounded-full w-[36px] h-[36px] hover:bg-sky-50 transition duration-300">
            <FaArrowLeft width={20} height={20} className="mx-auto text-gray-400"/>
          </button>
        </div>
        <div>
          <div>
            <button type="submit" className="w-20 text-center text-white text-sm rounded-full bg-cyan-950 py-1">保存</button>
          </div>
        </div>
        <div className="flex gap-2 pr-40 relative">
          <div className="cursor-pointer">
            <span className="text-sm text-slate-500">#タグ</span>
          </div>
          <div className="absolute top-8 -left-[100px] w-72 border border-slate-300/50 rounded-t-xl text-sm leading-normal">
           <div className="flex flex-wrap gap-2 p-3">
              {tags?.map((tag, index) => (
                <div className="flex gap-1 items-center border border-slate-300/50  rounded-full py-1 px-3">
                  <span>{tag.text}</span>
                  <span className="text-slate-300 cursor-pointer hover:text-slate-400 transition duration-300">✗</span>
                </div>
              ))}
              <input className="outline-none " type="text" name="" id="" placeholder="タグを追加"/>
           </div>
          </div>
        </div>
      </div>
      <div className="max-w-[580px] mx-auto px-6 py-24">
        <div className="mb-8">
          <textarea 
            className="w-full outline-0 leading-relaxed text-xl bg-transparent resize-none"  
            onChange={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            name="" 
            id="" 
            placeholder="タイトル"
          />
        </div>
        <div>
          <div className="">
            <textarea
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
        </div>
        <div>
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
        
      </div>
      {/* create page footer */}
      <div className="flex justify-between px-8">
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

