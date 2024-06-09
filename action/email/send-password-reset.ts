'use server';

import { getUserByEmail } from '@/lib/db';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/token';
import { PasswordResetSchema } from '@/schemas';
import { ActionsResult } from '@/types/ActionResult';
import { z } from 'zod';

export const passwordReset = async (
  values: z.infer<typeof PasswordResetSchema>,
): Promise<ActionsResult> => {
  const validatedFields = PasswordResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      isSuccess: false,
      error: validatedFields.error,
    };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {
      isSuccess: false,
      error: {
        message: 'ユーザーが見つかりませんでした',
      },
    };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return {
    isSuccess: true,
    message: 'パスワードリセットのメールを送信しました',
  };
};
