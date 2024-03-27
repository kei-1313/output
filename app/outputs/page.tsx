import CardList from "@/features/outputs/components/CardList/CardList"
import PageTitle from "@/features/outputs/components/Title/PageTitle"


const outputsPage = () => { 
	return (
		<div className="max-w-[880px] mx-auto mt-[50px]">
			<PageTitle>OUTPUTS</PageTitle>
      <CardList/>
    </div>
	)
}

export default outputsPage

