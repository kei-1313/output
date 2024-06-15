'use client';

import { passwordReset } from '@/action/email/send-password-reset';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordResetSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';

export const PasswordResetForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof PasswordResetSchema>>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof PasswordResetSchema>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      const result = await passwordReset(values);

      if (!result.isSuccess) {
        setError(result.error.message);
        return;
      }

      setSuccess(result.message);

      setTimeout(() => {
        router.push('/login');
      }, 3000);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  パスワード再設定の送信先を入力してください
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="com@example.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button disabled={isPending} type="submit">
          メールを送信
        </Button>
      </form>
    </Form>
  );
};
