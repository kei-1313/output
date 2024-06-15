'use client';

import { newPassword } from '@/action/email/new-password';
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
import { newPasswordSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';

export const NewPasswordForm = () => {
  // クエリパラメータを取得
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      const result = await newPassword(values, token);

      if (!result.isSuccess) {
        setError(result.error.message);
        return;
      }

      toast.success(result.message);

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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>新しいパスワード</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="*******"
                    type="password"
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
          パスワードをリセット
        </Button>
      </form>
    </Form>
  );
};
