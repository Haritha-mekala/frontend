import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMe } from '../store/slices/authSlice'
import { fetchWidgets } from '../store/slices/widgetsSlice'
import WidgetLoader from '../components/WidgetLoader'
import useSocket from '../hooks/useSocket'

export default function Dashboard(){
  const dispatch = useDispatch()
  const user = useSelector(s => s.auth.user)
  const widgets = useSelector(s => s.widgets.items)

  useEffect(()=>{ dispatch(fetchMe()) }, [dispatch])
  useEffect(()=>{ dispatch(fetchWidgets()) }, [dispatch])
  useSocket(user)

  if(!user) return <p className="p-6">Loading...</p>

  return (
    <main className="p-6 space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard — {user.name} ({user.roles.join(', ')})</h1>
        <div>
          <button onClick={()=>{ const t = document.documentElement.classList.toggle('dark'); localStorage.setItem('theme', t ? 'dark' : 'light') }} className="btn">Toggle Theme</button>
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {widgets.map(w => <WidgetLoader key={w.id} widget={w} />)}
      </section>
    </main>
  )
}
