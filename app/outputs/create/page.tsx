"use client"

import { useCallback, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const outputsCreatePage = () => {
  const [bodyContent, setBodyContent] = useState("")
  const [isEditorEdit, setIsEditorEdit] = useState(true)

  const handleBobyContent = useCallback((e) => {
    console.log(e.target.innerText.length);
    // console.log(e.key);
    
    //本文が空欄の場合はplaceholderを表示させる
    if(e.target.innerText.trim().length > 0) {
      setIsEditorEdit(false)
    } else {
      setIsEditorEdit(true)
      console.log("true");
      
    }
  },[])

  const handleBobyContentKeyDown = useCallback((e) => {
    if(e.target.innerText.trim().length <= 0 && (e.key === 'Delete' || e.key === 'Backspace')) {
      e.preventDefault()
    }
  },[])

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
          <div className="focus:outline-none" contentEditable="true" onInput={handleBobyContent} onKeyDown={handleBobyContentKeyDown}>
            {isEditorEdit? (
              <p className={"text-base focus:outline-none is-editor-empty"} data-placeholder="本文を書く"></p>
            ):(
              <p className={"text-base focus:outline-none"}></p>
            )}
          </div>
        </div>
      </div>
    </form>
	)
}

export default outputsCreatePage

