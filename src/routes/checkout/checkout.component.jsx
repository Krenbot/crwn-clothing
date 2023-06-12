import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext)

    return (
        <div>
            <h1>I AM THE CHECKOUT PAGE</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const { id, name, quantity } = cartItem;

                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <br />
                                <span onClick={() => addItemToCart(cartItem)}>increment</span>
                                <br />
                                <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Checkout