"use client"

import Card from "../Card/Card"

const CardList = () => { 
	return (
		<div className=" mt-[50px]">
      <ul className="grid grid-cols-2 gap-x-[54px] gap-y-6">
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</ul>
    </div>
	)
}

export default CardList

