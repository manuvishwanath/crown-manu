import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart, AddItem, RemoveItem } from '../../Redux/cart/cart.actions';
import './checkout-item.styles.scss';


const CheckOut = ({ cartItem, removeCartItem, removeItem, addItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item:{name}" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => (removeCartItem(cartItem))}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => (
    {
        removeCartItem: item => dispatch(removeItemFromCart(item)),
        removeItem: item => dispatch(RemoveItem(item)),
        addItem: item => dispatch(AddItem(item))
    }
)

export default connect(null, mapDispatchToProps)(CheckOut);