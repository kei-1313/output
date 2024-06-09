'use server';

import prisma, { getPasswordResetTokenByToken, getUserByEmail } from '@/lib/db';
import { newPasswordSchema } from '@/schemas';
import { ActionsResult } from '@/types/ActionResult';
import { z } from 'zod';

export const newPassword = async (
  values: z.infer<typeof newPasswordSchema>,
  token?: string | null,
): Promise<ActionsResult> => {
  if (!token) {
    return {
      isSuccess: false,
      error: {
        message: 'トークンが無効です',
      },
    };
  }

  const validatedFields = newPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      isSuccess: false,
      error: validatedFields.error,
    };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return {
      isSuccess: false,
      error: { message: 'トークンが無効です' },
    };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return {
      isSuccess: false,
      error: { message: 'トークンが有効期限切れです' },
    };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return {
      isSuccess: false,
      error: { message: 'ユーザーが見つかりませんでした' },
    };
  }

  const bcrypt = require('bcrypt');
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      hashedpassword: hashedPassword,
    },
  });

  await prisma.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return {
    isSuccess: true,
    message: 'パスワードをリセットしました',
  };
};
