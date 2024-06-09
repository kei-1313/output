import PageTitle from '@/features/auth/components/PageTitle/PageTitle';
import LoginForm from '@/features/auth/components/login-form';
import { SocialButtons } from '@/features/auth/components/social-buttons';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="mx-auto mt-[50px] w-full max-w-[640px] px-5">
      <PageTitle>ログイン</PageTitle>
      <LoginForm />
      <SocialButtons />
      <div className="mt-8 flex flex-col items-end gap-2">
        <Link className="text-sm" href="/signup">
          新規登録の方はこちら
        </Link>
        <Link className="text-sm" href="/password-reset">
          パスワードをお忘れの方はこちら
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
