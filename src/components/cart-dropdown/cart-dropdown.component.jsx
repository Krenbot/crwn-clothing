import React from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>

            {[].map(item => <CartItem cartItem={item} />)}

        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

export default CartDropdown;