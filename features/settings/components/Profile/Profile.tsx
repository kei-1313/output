import ProfileImage from "./ProfileImage"
import ProfileName from "./ProfileName"
import ProfileText from "./ProfileText"

const Profile = () => { 
	return (
		<div className="mt-10 flex flex-col gap-11 max-sm:mb-16 max-sm:gap-8">
      <ProfileImage></ProfileImage>
			<ProfileName></ProfileName>
			<ProfileText></ProfileText>
    </div>
	)
}

export default Profile

