import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../features/CartSlice'
import WishListSlice from '../features/WishListSlice'
export const store = configureStore({
  reducer: {
    cart:CartSlice,
    wish:WishListSlice
  },
})