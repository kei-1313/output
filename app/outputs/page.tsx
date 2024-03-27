"use client"

import CardList from "@/features/outputs/components/CardList/CardList"
import PageTitle from "@/features/outputs/components/Title/PageTitle"
import { useEffect } from "react"


const outputsPage = () => {
	const url = "https://9f4fd1a4-534c-40d5-b010-ea4c167a78c1.mock.pstmn.io/posts"

	const getAllPosts = async() => {
		const res = await fetch(url,{
			headers: {
				"Content-Type": "application/json",
				"x-api-key" : process.env.NEXT_PUBLIC_POSTMAN_API_KEY!
			},
		})
		const posts = await res.json()

		console.log(posts);
	}

	useEffect(() => {
		getAllPosts()
	},[])

	return (
		<div className="max-w-[880px] mx-auto mt-[50px]">
			<PageTitle>OUTPUTS</PageTitle>
      <CardList/>
    </div>
	)
}

export default outputsPage

