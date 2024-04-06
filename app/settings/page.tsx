import Profile from "@/features/settings/components/Profile/Profile"
import PageTitle from "@/features/settings/components/Title/PageTItle"

const settingsPage = () => { 
	return (
		<div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md pt-20">
      <div>
        <PageTitle>設定</PageTitle>
        <Profile></Profile>
      </div>
    </div>
	)
}

export default settingsPage

