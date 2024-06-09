import { currentUser } from '@/action/user/currentUser';
import Profile from '@/features/settings/components/Profile/Profile';
import PageTitle from '@/features/settings/components/Title/PageTItle';
import ToBackButton from '@/features/utils/ToBackButton/ToBackButton';
import Link from 'next/link';

const settingsPage = async () => {
  const user = await currentUser();

  return (
    <div>
      <div className="flex items-center pl-5 pt-5">
        <ToBackButton href={'/outputs'} width={30} height={53} />
      </div>
      <div className="xs:px-7 mx-auto w-full max-w-screen-md px-6 py-20 sm:px-10">
        <div>
          <PageTitle>設定</PageTitle>
          <Profile user={user}></Profile>
        </div>
      </div>
    </div>
  );
};

export default settingsPage;
