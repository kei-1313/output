'use client';

import { newVerification } from '@/action/email/verify-email';
import { FormError } from '@/features/auth/components/form-error';
import { FormSuccess } from '@/features/auth/components/form-success';
import { Spinner } from '@/features/auth/components/spinner';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(async () => {
    if (success || error) return;

    if (!token) {
      setError('トークンが見つかりません');
      return;
    }

    const result = await newVerification(token);
    if (!result.isSuccess) {
      setError(result.error.message);
      return;
    }

    setSuccess(result.message);

    setTimeout(() => {
      router.push('/login');
    }, 3000);
  }, [token, success, error, router]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex w-full items-center justify-center">
      {!success && !error && <Spinner />}
      <FormSuccess message={success} />
      {!success && <FormError message={error} />}
    </div>
  );
};

export default NewVerificationForm;
