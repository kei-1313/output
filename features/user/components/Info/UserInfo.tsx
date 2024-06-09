import Image from "next/image"

const UserInfo = () => {
  return (
    <div className="flex gap-4 mx-auto mt-16 mb-10 max-w-[880px] px-5">
      <div className="w-[120px] max-md:w-[60px]">
        <Image className="rounded-full" src="/images/dammy.png" width={120} height={120} alt="dammy" />
      </div>
      <div>
        <h1 className="text-xl font-bold mb-3 max-md:mb-2 max-md:text-base">ソ・ダルミ</h1>
        <p className="text-base max-md:text-sm">ソ・ダルミです。</p>
      </div>
    </div>
  )
}

export default UserInfo
