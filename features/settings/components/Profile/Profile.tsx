import { Suspense } from 'react';

import { User } from '@/types/types';

import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';
import ProfileText from './ProfileText';
import SettingsLoading from '@/app/settings/loading';

interface ProfilePros {
  user: User | null;
}

const Profile = ({ user }: ProfilePros) => {
  return (
    <div className="mt-10 flex flex-col gap-11 max-sm:mb-16 max-sm:gap-8">
      <ProfileImage userImage={user?.image} userId={user?.id}></ProfileImage>
      <ProfileName userName={user?.name} userId={user?.id}></ProfileName>
      <ProfileText userProfile={user?.profile} userId={user?.id}></ProfileText>
    </div>
  );
};

export default Profile;
