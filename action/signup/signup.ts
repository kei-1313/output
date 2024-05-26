'use server';

import prisma from '@/lib/db';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerificationToken } from '@/lib/token';
import { handleError } from '@/lib/utils';
import { SignUpSchema } from '@/schemas';
import { z } from 'zod';

/**
 * @description ユーザー新規登録
 * @param formData フォームデータ
 */
export async function signUp(values: z.infer<typeof SignUpSchema>) {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      isSuccess: false,
      error: {
        message: validatedFields.error.message,
      },
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 12);

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return {
        isSuccess: false,
        error: {
          message: 'このメールアドレスはすでに登録済みです',
        },
      };
    }

    await prisma.user.create({
      data: {
        name,
        email,
        hashedpassword: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return {
      isSuccess: true,
      message: '確認メールを送信しました',
    };
  } catch (error) {
    handleError(error);

    return {
      isSuccess: false,
      error: {
        message: 'ユーザー登録に失敗しました',
      },
    };
  }
}
