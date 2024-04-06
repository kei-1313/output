const ProfileText = () => { 
	return (
		<div className="overflow-hidden rounded-2xl border border-slate-300/50 p-6 md:p-7">
      <h3 className="text-base">プロフィール文</h3>
      <p className="text-gray-400 mt-3 mb-5">本文下に好きな文章を表示することができます。</p>
      <button className="text-sm py-3 px-4 border border-slate-300/50 rounded-full hover:bg-slate-100 transition duration-300">登録する</button>
    </div>
	)
}

export default ProfileText