"use client"

import Card from "../Card/Card"

interface CardListProps {
  posts: [
		{
			username : string,
			title: string,
			body: string,
			likes: string,
			createAt : string
		}
	]
}

const CardList:React.FC<CardListProps> = ({posts}) => {
	return (
		<div className=" mt-[50px]">
      <ul className="grid grid-cols-2 gap-x-[54px] gap-y-6">
				{posts?.map((post, index) => (
					<Card post={post}/>
				))}
			</ul>
    </div>
	)
}

export default CardList

