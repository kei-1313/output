export interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({children} : PageTitleProps) => { 
	return (
		<h1 className="text-[40px] text-black font-bold">{children}</h1>
	)
}

export default PageTitle

