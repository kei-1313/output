import { postsAll } from "@/action/post/postsAll"
import CardList from "@/features/outputs/components/CardList/CardList"
import CategoryList from "@/features/outputs/components/CategoryList/CategoryList"
import PageTitle from "@/features/outputs/components/Title/PageTitle"



const outputsPage = async () => {
  const posts = await postsAll()
	
	return (
		<div className="max-w-[880px] mx-auto mt-[50px] px-5 ">
			<PageTitle>OUTPUTS</PageTitle>
			{/* <CategoryList categories={categories}/> */}
      <CardList posts={posts}/>
    </div>
	)
}

export default outputsPage

