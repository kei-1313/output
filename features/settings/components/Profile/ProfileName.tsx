"use client"

import { useState } from "react"

const ProfileName = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState('dalmi')

  const handleEditName = () => {
    setIsEdit(true)
  }
  const handleEditCancelName = () => {
    setIsEdit(false)
  }

	return (
		<div className="overflow-hidden rounded-2xl border border-slate-300/50 p-6 md:p-7">
      <h3 className="text-base mb-3">表示名</h3>
      {isEdit? (
        <input 
          className="transition-all mb-5 border rounded-lg py-2.5 px-3 leading-normal outline-none text-sm disabled:opacity-60 disabled:cursor-not-allowed w-full" 
          type="text" 
          name="" 
          id="" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="表示名を入力"
        />
      ):(
        <p className="text-gray-400 mb-5">dalmi</p>
      )}
      {isEdit? (
        <div className="flex gap-4 justify-end">
          <button onClick={handleEditCancelName} className="text-sm text-gray-400 hover:text-gray-700 transition duration-300">キャンセル</button>
          <button className="text-sm py-3 px-4 border border-slate-300/50 rounded-full hover:bg-slate-100 transition duration-300">保存する</button>
        </div>
      ):(
          <button onClick={handleEditName} className="text-sm py-3 px-4 border border-slate-300/50 rounded-full hover:bg-slate-100 transition duration-300">変更する</button>
      )}
    </div>
	)
}

export default ProfileName

