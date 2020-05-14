import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../Assets/cartIcon.svg';
import { ToggleCartHidden } from '../../Redux/cart/cart.actions'
import { selectCartQuantity } from '../../Redux/cart/cart.selector'

import './cartIcon.styles.scss';


const CartIcon = ({ ToggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = Dispatch => ({
    ToggleCartHidden: () => Dispatch(ToggleCartHidden())
})

const mapStateToProps = (state) => createStructuredSelector(
    {
        itemCount: selectCartQuantity
        //itemCount: cartItems.reduce((accumulatedQuantity, cartItems) => accumulatedQuantity + cartItems.quantity, 0)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
