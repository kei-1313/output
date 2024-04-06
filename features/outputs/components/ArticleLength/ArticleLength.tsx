"use client"

interface ArticleLengthProps {
  articleLength: number 
}

const ArticleLength:React.FC<ArticleLengthProps> = ({articleLength}) => { 
	return (
		<div className="w-[40px] h-[40px] rounded-full flex justify-center items-center border border-slate-500">
      <span className="block text-sm text-slate-500">{ articleLength }</span>
    </div>
	)
}

export default ArticleLength

