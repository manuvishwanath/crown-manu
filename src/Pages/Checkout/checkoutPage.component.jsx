import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../Redux/cart/cart.selector'
import CheckOut from '../../Components/checkout-item/checkout-item.component'
import StripeButton from '../../Components/stripe-button/stripe-button.component';

import './checkoutPage.styles.scss';


const Checkout = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Products</span>
            </div>
            <div className='header-block'>
                <span>Descrition</span>
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
        {
            cartItems.map(item => <CheckOut key={item.id} cartItem={item} />)
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <StripeButton price={total} />
        <div className="test-warning">
            *** Please use the card number 4242 4242 4242 4242, Exp: any date, CVV: 123******
            
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        total: selectCartTotal
    }
)

export default connect(mapStateToProps)(Checkout);