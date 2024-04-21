import { Button } from '@/components/ui/button';
import PageTitle from '@/features/auth/components/PageTitle/PageTitle';
import LoginForm from '@/features/auth/components/login-form';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="mx-auto mt-[50px] w-full max-w-[640px] px-5">
      <PageTitle>ログイン</PageTitle>
      <LoginForm />
      <div className="mt-8 flex items-center justify-center gap-10">
        <Button className="px-8">Github</Button>
        <Button className="px-8">Google</Button>
      </div>
      <div className="mt-8 flex flex-col items-end gap-2">
        <Link className="text-sm" href="/register">
          新規登録の方はこちら
        </Link>
        <Link className="text-sm" href="">
          パスワードをお忘れの方はこちら
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
