import CardList from "@/features/outputs/components/CardList/CardList"
import CategoryList from "@/features/outputs/components/CategoryList/CategoryList"
import PageTitle from "@/features/outputs/components/Title/PageTitle"


const outputsPage = async () => {
	const url = "https://9f4fd1a4-534c-40d5-b010-ea4c167a78c1.mock.pstmn.io/posts"

	const getAllPosts = async () => {
		const res = await fetch(url,{
			headers: {
				"Content-Type": "application/json",
				"x-api-key" : process.env.NEXT_PUBLIC_POSTMAN_API_KEY!
			},
		})
		const posts = await res.json()
		return posts
	}

	const posts = await getAllPosts()

	console.log(posts);
	

	return (
		<div className="max-w-[880px] mx-auto mt-[50px] px-5 ">
			<PageTitle>OUTPUTS</PageTitle>
			<CategoryList/>
      <CardList posts={posts}/>
    </div>
	)
}

export default outputsPage

