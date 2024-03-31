"use client"

import { useCallback, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
// import { v4 as uuidv4 } from 'uuid';

const outputsCreatePage = () => {
  

	return (
    <form>
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
        <div className="flex gap-2 pr-20">
          <div className="cursor-pointer">
            <span className="text-sm text-slate-500">#タグ</span>
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
              autoFocus
            />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </form>
	)
}

export default outputsCreatePage

