import { Button } from '@/components/ui/button';
import PageTitle from '@/features/auth/components/PageTitle/PageTitle';
import SignUpForm from '@/features/auth/components/signup-form';

import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className="mx-auto mt-[50px] w-full max-w-[640px] px-5">
      <PageTitle>新規登録</PageTitle>
      <div className="mt-4">
        <SignUpForm />
      </div>
      <div className="mt-8 flex items-center justify-center gap-10">
        <Button className="min-w-36">Github</Button>
        <Button className="min-w-36">Google</Button>
      </div>
      <div className="mt-8 flex justify-end">
        <Link className="text-right text-sm" href="/login">
          アカウントを既にお持ちの方はこちら
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
