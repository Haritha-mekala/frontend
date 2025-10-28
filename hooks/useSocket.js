import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useDispatch } from 'react-redux'
import { push } from '../store/slices/notificationsSlice'

export default function useSocket(user){
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!user) return
    const socket = io(process.env.NEXT_PUBLIC_WS || 'http://localhost:4000', { auth: { roles: user.roles } })
    socket.on('notification', (n) => dispatch(push(n)))
    return ()=> socket.disconnect()
  }, [user])
}
