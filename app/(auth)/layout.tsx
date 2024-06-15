import { Toaster } from '@/components/ui/sonner';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid h-dvh w-full place-items-center">{children}</div>
      <Toaster />
    </>
  );
}
