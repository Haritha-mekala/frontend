import Link from 'next/link'
export default function Home(){ 
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white dark:bg-slate-800 rounded shadow">
        <h1 className="text-2xl font-semibold">Multi-role App</h1>
        <p className="mt-4">A starter frontend. <Link href="/login"><a className="text-blue-600">Sign in</a></Link></p>
      </div>
    </main>
  )
}
