import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Wishvalue:[],
}

export const WishListSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
   WishData:(state,actions) => {
  state.Wishvalue.push(actions.payload)
   }
  },
})

export const { WishData } = WishListSlice.actions

export default WishListSlice.reducer