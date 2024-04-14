"use client"

import Card from "../Card/Card"

interface CardListProps {
  posts: any
}

const CardList:React.FC<CardListProps> = ({posts}) => {
	
	return (
		<div className=" mt-[50px]">
      <ul className="grid grid-cols-2 gap-x-[54px] gap-y-6 max-md:grid-cols-1">
				{posts?.map((post:any, index:any) => (
					<Card post={post} key={index}/>
				))}
			</ul>
    </div>
	)
}

export default CardList

