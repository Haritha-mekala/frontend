import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchMe } from '../store/slices/authSlice'

export default function LoginPage(){
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  async function onSubmit(e){
    e.preventDefault()
    const fd = new FormData(e.target)
    setLoading(true)
    try{
      await axios.post(process.env.NEXT_PUBLIC_API_BASE + '/auth/login', { email: fd.get('email'), password: fd.get('password') }, { withCredentials: true })
      await dispatch(fetchMe())
      window.location.href = '/dashboard'
    }catch(err){
      alert(err?.response?.data?.message || 'Login failed')
    }finally{ setLoading(false) }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-full max-w-md p-6 bg-white dark:bg-slate-800 rounded shadow">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <label className="block mt-4">Email <input name="email" required className="input"/></label>
        <label className="block mt-2">Password <input name="password" type="password" required className="input"/></label>
        <button className="btn mt-4" disabled={loading}>{loading ? 'Signing...' : 'Sign in'}</button>
      </form>
    </main>
  )
}
