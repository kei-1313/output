import { FaArrowLeft } from "react-icons/fa";

const outputsCreatePage = () => { 
	return (
    <div>
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
        <div>テスト</div>
      </div>
    </div>
	)
}

export default outputsCreatePage

