import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartvalue:[],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   CartData:(state,actions) => {
    const find =  state.cartvalue.findIndex((value)=>value.id===actions.payload.id)
   if (find !=-1) {
    state.cartvalue[find] = {...state.cartvalue[find], Quantity:state.cartvalue[find].Quantity+1}
   }else{
     state.cartvalue.push({...actions.payload,Quantity:1})
   }
   }
  },
})

export const { CartData } = CartSlice.actions

export default CartSlice.reducer