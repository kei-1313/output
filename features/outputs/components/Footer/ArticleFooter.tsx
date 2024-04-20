import LoginUserInfo from "@/features/utils/LoginUserInfo/LoginUserInfo"

const ArticleFooter = () => {
  return (
    <footer className="bg-footer pt-14 pb-20 max-md:pt-6">
      <div className="mx-auto w-full px-6 max-w-screen-lg flex">
        <LoginUserInfo width={30} height={30} href={"/settings"} src={""} username={"dalmi"}/>
      </div>
    </footer>
  )
}

export default ArticleFooter
