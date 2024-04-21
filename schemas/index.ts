import { z } from 'zod';

export const FormSchema = z.object({
  name: z.string().min(1, {
    message: '名前は必須です',
  }),
  email: z.string().email({
    message: 'メールアドレスは必須です',
  }),
  password: z.string().min(8, {
    message: 'パスワードは8文字以上で入力してください',
  }),
});

export const SignUpSchema = FormSchema.omit({});

export const LoginSchema = FormSchema.omit({
  name: true,
});
