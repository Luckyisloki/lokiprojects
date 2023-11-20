import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartValues : [],
    totalPrice :0,
    imageName: "", 
    imageItem : ""
}

const CartReducer = createSlice({
    name:"CartReducer",
    initialState,
    reducers:{
        incrementcart:(state,action)=>{
            state.cartValues.push(action.payload)
        const priceArray = state.cartValues.map(obj => obj.productPrice)
        state.totalPrice = priceArray.reduce((a,b)=> a+b)
        const productsArray = state.cartValues.map(obj => obj.productImage)
        state.imageItem = productsArray.reduce((a,b)=> a+b)
        const nameArray = state.cartValues.map(obj => obj.productName)
        state.imageName = nameArray.reduce((a,b)=> a+b)

        },
        decrementcart:(state,action)=>{
            const index = state.cartValues.findIndex(obj => obj.productName === action.payload.productName)
            if(index > -1){
            state.cartValues.splice(index,1)
            }
            const priceArray = state.cartValues.map(obj => obj.productPrice)
            state.totalPrice = priceArray.reduce((a,b)=> a+b)

            const indexed = state.cartValues.findIndex(obj => obj.productImage === action.payload.productImage)
            if(indexed > -1){
            state.cartValues.splice(index,1)
            }
            // const productsArray = state.imageItem.map(obj => obj.productImage)
            // state.imageItem = priceArray.reduce((a,b)=> a+b)
        }
    }
})

export const {incrementcart,decrementcart} = CartReducer.actions;
export default CartReducer.reducer;