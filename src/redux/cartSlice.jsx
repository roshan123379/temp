import { createSlice} from "@reduxjs/toolkit";

// const loadCartFromLocalStorage = () => {
    
//       const cartData = localStorage.getItem('cart');
//       return cartData ? JSON.parse(cartData) : [];
    
//   };
  
//   const saveCartToLocalStorage = (cartItems) => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   };

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        totalQuantity:0,
        totalPrice:0
    },
    reducers:{
        addtoCart:(state,action)=>{
            
            let find = state.cart.findIndex((item)=>item.id === action.payload.id)
            if(find >=0){
              state.cart[find].piece= state.cart[find].piece + 1;
            }
            else{
              state.cart.push(action.payload)
            }
           
        },
        getCartTotal: (state) => {
          let { totalQuantity, totalPrice } = state.cart.reduce(
            (cartTotal, cartItem) => {
              console.log("carttotal", cartTotal);
              console.log("cartitem", cartItem);
              const { price, piece } = cartItem;
              console.log(price, piece);
              const itemTotal = price * piece;
              cartTotal.totalPrice += itemTotal;
              cartTotal.totalQuantity += piece;
              return cartTotal;
            },
            {
              totalPrice: 0,
              totalQuantity: 0,
            }
          );
          state.totalPrice = parseInt(totalPrice.toFixed(2));
          state.totalQuantity = totalQuantity;
        },
        
        
        removeCart: (state,action)=>{
            state.cart= state.cart.filter(x=>x.id !== action.payload.id)
            
            // saveCartToLocalStorage(state.x)
            
        },

    }

})

export default cartSlice.reducer;
export const {addtoCart,getCartTotal,removeCart}= cartSlice.actions