"use client"

import Category from "../Category/Category"

const CategoryList = () => {
	return (
		<div className="mt-[50px]">
      <ul className="flex flex-wrap gap-4">
				{/* {posts?.map((post, index) => ( */}
					<Category/>
					<Category/>
					<Category/>
					<Category/>
				{/* ))} */}
			</ul>
    </div>
	)
}

export default CategoryList

