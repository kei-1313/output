export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-dvh w-full grid place-items-center">{children}</div>;
}
