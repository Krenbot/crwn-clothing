import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => {
                const { id, name, quantity } = cartItem;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)}>+</span>
                        <br />
                        <span onClick={() => removeItemToCart(cartItem)}>-</span>
                    </div>
                );
            })}
            <span className='total'>Total: 0</span>
        </div>
    )
}

export default Checkout