import Image from "next/image"

const ProfileImage = () => {
	return (
		<div className="overflow-hidden rounded-2xl border border-slate-300/50 p-6 md:p-7">
      <div className="flex gap-6 items-center">
        <div>
          <Image className="rounded-full" src="/images/dammy.png" width={64} height={64} alt="dammy"/>
        </div>
        <div>
          <button className="inline-flex h-10 items-center gap-2 text-sm rounded-full border border-slate-300/50 px-4 hover:bg-slate-100 transition duration-300">プロフィール画像を変更</button>
        </div>
      </div>
    </div>
	)
}

export default ProfileImage

