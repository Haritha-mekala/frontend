import { createSlice } from '@reduxjs/toolkit'
const s = createSlice({
  name:'notifications',
  initialState: { list: [] },
  reducers: {
    push(state, action){ state.list.unshift(action.payload) }
  }
})
export const { push } = s.actions
export default s.reducer
