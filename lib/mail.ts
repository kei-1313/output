import PasswordResetEmail from '@/features/mail/password-reset-email';
import VerificationEmail from '@/features/mail/verification-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'メールアドレスの確認',
    react: VerificationEmail({ email, confirmLink }),
    /**
     * X-Entity-Ref-ID ... Gmailのスレッディングを防ぐ
     * https://resend.com/docs/api-reference/emails/send-email
     */
    headers: {
      'X-Entity-Ref-ID': new Date().getTime() + '',
    },
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/new-password?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'パスワードのリセット',
    react: PasswordResetEmail({ email, resetLink }),
    headers: {
      'X-Entity-Ref-ID': new Date().getTime() + '',
    },
  });
};
