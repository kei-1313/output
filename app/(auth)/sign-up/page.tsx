import PageTitle from '@/features/outputs/components/Title/PageTitle';
import FormItem from '@/features/sign-up/components/FormItem/FormItem';

const SignInPage = () => {
  return (
    <div className="max-w-[880px] w-full mx-auto mt-[50px] px-5">
      <PageTitle>新規登録</PageTitle>
      <form
        className="flex flex-col space-y-6 mt-10"
        action="">
        <FormItem
          label="ユーザー名"
          type="text"
          id="name"
        />
        <FormItem
          label="メールアドレス"
          type="email"
          id="name"
        />
        <FormItem
          label="パスワード"
          type="text"
          id="name"
        />
        <button>アカウント作成</button>
        <div>
          <button>Github</button>
          <button>Google</button>
        </div>
      </form>
      <a href="">アカウントを既にお持ちの方はこちら</a>
    </div>
  );
};

export default SignInPage;
