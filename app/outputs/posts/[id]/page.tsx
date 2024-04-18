import ArticleCategoryList from "@/features/outputs/components/ArticleCategoryList/ArticleCategoryList"
import ArticleContent from "@/features/outputs/components/ArticleContent/ArticleContent"
import ArticleDate from "@/features/outputs/components/ArticleDate/ArticleDate"
import ArticleUserIcon from "@/features/outputs/components/ArticleUserIcon/ArticleUserIcon"
import ArticleTitle from "@/features/outputs/components/Title/ArticleTitle"



const postDetailPage = ({ params }: { params: { id: string } }) => {

  return (
    <article className="max-w-[580px] mx-auto px-6 py-24">
      <div className="mb-10">
        <ArticleTitle title={"テスト"}/>
      </div>
      <div className="mb-10">
        <ArticleDate/>
      </div>
      <div className="mb-20">
        <ArticleContent content={"# 見出し\n ## 見出し2\n ### 見出し3"}/>
      </div>
      <div className="mb-20">
        <ArticleCategoryList/>
      </div>
      <ArticleUserIcon/>
    </article>
  )
}

export default postDetailPage;
