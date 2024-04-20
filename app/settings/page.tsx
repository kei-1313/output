import Profile from '@/features/settings/components/Profile/Profile';
import PageTitle from '@/features/settings/components/Title/PageTItle';

const settingsPage = () => {
  return (
    <div className="xs:px-7 mx-auto w-full max-w-screen-md px-6 pt-20 sm:px-10">
      <div>
        <PageTitle>設定</PageTitle>
        <Profile></Profile>
      </div>
    </div>
  );
};

export default settingsPage;
