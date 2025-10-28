import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import widgets from './slices/widgetsSlice'
import notifications from './slices/notificationsSlice'

export default configureStore({ reducer: { auth, widgets, notifications } })
