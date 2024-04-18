const SignInPage = () => {
  return (
    <div>
      <h1>新規登録</h1>
      <form action="">
        <div>
          <label htmlFor="">ユーザー名</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">メールアドレス</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">パスワード</label>
          <input type="text" />
        </div>
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
