import Image from "next/image"

const UserInfo = () => {
  return (
    <div className="flex gap-4 mx-auto mt-16 mb-10 max-w-[880px] px-5">
      <div className="">
        <Image className="rounded-full" src="/images/dammy.png" width={120} height={120} alt="dammy" />
      </div>
      <div>
        <h1 className="text-xl font-bold mb-3">ソ・ダルミ</h1>
        <p className="text-base">ソ・ダルミです。</p>
      </div>
    </div>
  )
}

export default UserInfo
