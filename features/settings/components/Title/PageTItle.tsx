export interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({children} : PageTitleProps) => { 
	return (
		<h1 className="text-[20px] text-black">{children}</h1>
	)
}

export default PageTitle