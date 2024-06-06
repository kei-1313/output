import { User } from '@/types/types';
import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';
import ProfileText from './ProfileText';

interface ProfilePros {
  user: User | null
}

const Profile = ({user}:ProfilePros) => {
  return (
    <div className="mt-10 flex flex-col gap-11 max-sm:mb-16 max-sm:gap-8">
      <ProfileImage userImage={user?.image}></ProfileImage>
      <ProfileName userName={user?.name}></ProfileName>
      <ProfileText userProfile={user?.profile}></ProfileText>
    </div>
  );
};

export default Profile;
