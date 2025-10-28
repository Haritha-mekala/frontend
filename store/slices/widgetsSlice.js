import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchWidgets = createAsyncThunk('widgets/fetch', async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE + '/widgets', { withCredentials: true })
  return res.data
})

const slice = createSlice({
  name:'widgets',
  initialState:{ items: [] },
  reducers:{},
  extraReducers:(b)=>{ b.addCase(fetchWidgets.fulfilled, (s,a)=>{ s.items = a.payload }) }
})
export default slice.reducer
