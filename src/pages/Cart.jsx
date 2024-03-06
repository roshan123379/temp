import { useDispatch, useSelector } from "react-redux"
import { removeCart, getCartTotal } from "../redux/cartSlice"
import { useEffect } from "react"


const Cart = () => {
    const cartitems = useSelector(state => state.cart.cart)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()
    
    
   
    if (cartitems.length === 0) {
        return (
            <div>cart is empty</div>
        )
    }

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cartitems]);

    return (
        <>
            <div className="cartPage">
                <div className="cart">
                    <div className="cartItems">
                        <div className="cartHead">
                            <div>Cart</div>

                        </div>




                        {
                            cartitems.map(item => {

                                return (

                                    <>



                                        <div className="item">
                                            <div className="item1"><img src={item.img} alt="" /></div>
                                            <div className="item2">{item.name}</div>
                                            <div className="item3">{item.price}</div>
                                            <div className="item4"> <div className="minus">-</div>
                                                <div className="quantity">{item.piece}</div>
                                                <div className="plus">+</div></div>
                                            <div className="item5"><i onClick={() => dispatch(removeCart({ id: item.id }))} class="fa-regular fa-circle-xmark fa-xl"></i></div>

                                        </div>
                                        <hr />



                                        {/* <div className="img"><img src="" alt="" /></div>

                                    <div className="desc">
                                        <div className="name">{item.name}</div>
                                        <div className="price">{item.price}</div>
                                        <div>{item.description}</div>
                                        <div className="totalQuantity">
                                            <div className="minus">-</div>
                                            <div className="quantity">{item.piece}</div>
                                            <div className="plus">+</div>
                                        </div>
                                        <div className="button"> <button onClick={() => dispatch(removeCart({ id: item.id }))}>Remove</button></div>
                                        <div>{item.price * item.piece}</div>
                                    </div> */}


                                        {/* <div>{totalPrice}</div>
                                <div>{totalQuantity}</div> */}

                                    </>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="checkPage">
                    <div>Summary</div>
                    <div>
                        <div>{totalPrice}</div>
                        <div>{totalQuantity}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart