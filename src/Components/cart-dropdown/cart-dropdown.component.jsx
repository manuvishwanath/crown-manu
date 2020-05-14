import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';

import CustomButton from '../Custom-Button/Custom-Button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../Redux/cart/cart.selector'
import { ToggleCartHidden } from '../../Redux/cart/cart.actions'

import './cart-dropdown.styles.scss'
// if there is no dispatch related argument to the connect then dispatch is provided to the function as a argument
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) :
                    <span className='empty-message'>Your Cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            dispatch(ToggleCartHidden());
            (history.push('/checkout'))
        }}>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => createStructuredSelector(
    { cartItems: selectCartItems }
)

export default withRouter(connect(mapStateToProps)(CartDropdown));