"use client"

import Category from "../Category/Category"

interface CategoryListProps {
  categories: [
    {
      id: string,
      category: string
    }
  ]
}

const CategoryList:React.FC<CategoryListProps> = ({categories}) => {
	return (
		<div className="mt-[50px]">
      <ul className="flex flex-wrap gap-4">
				{categories?.map((category, index) => (
					<Category category={category} key={index}/>
				))}
			</ul>
    </div>
	)
}

export default CategoryList

