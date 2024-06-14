import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await auth();

  if(session) {
    redirect('/outputs')
  }

  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">

  //   </main>
  // );
}
