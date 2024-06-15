import PageTitle from '@/features/auth/components/PageTitle/PageTitle';
import SignUpForm from '@/features/auth/components/signup-form';
import { SocialButtons } from '@/features/auth/components/social-buttons';

import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className="mx-auto mt-[50px] w-full max-w-[640px] px-5">
      <PageTitle>新規登録</PageTitle>
      <div className="mt-4">
        <SignUpForm />
      </div>
      <SocialButtons />
      <div className="mt-8 flex justify-end">
        <Link className="text-right text-sm" href="/login">
          アカウントを既にお持ちの方はこちら
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
