'use client';

import { Button } from '@/components/ui/button';
import FormItem from '@/features/auth/components/FormItem/FormItem';
import PageTitle from '@/features/auth/components/PageTitle/PageTitle';
import { authenticate } from '@/lib/actions';
import Link from 'next/link';
import { useFormState } from 'react-dom';

const LoginPage = () => {
  const [state, formAction] = useFormState(authenticate, true);

  return (
    <div className="mx-auto mt-[50px] w-full max-w-[640px] px-5">
      <PageTitle>ログイン</PageTitle>
      <form action={formAction} className="mt-10 flex flex-col space-y-6">
        <FormItem label="メールアドレス" type="email" name="email" />
        <FormItem label="パスワード" type="text" name="password" />
        {!state && (
          <p className="text-red-500">メールアドレスかパスワードが違います</p>
        )}
        <Button type="submit" className="mx-auto mt-8 w-fit px-8">
          ログイン
        </Button>
      </form>
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
