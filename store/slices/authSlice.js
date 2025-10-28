import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMe = createAsyncThunk('auth/fetchMe', async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE + '/auth/me', { withCredentials: true })
  return res.data
})

const slice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchMe.fulfilled, (s, a) => { s.user = a.payload })
  }
})
export default slice.reducer
