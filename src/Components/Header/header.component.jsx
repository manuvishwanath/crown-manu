import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import './header.component.style.scss'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../Redux/cart/cart.selector'
import { selectCurrentUser } from '../../Redux/User/user.selector'

import { ReactComponent as Logo } from '../../Assets/crown.svg';
import CartIcon from '../CartIcon/cartIcon.component';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact Us
            </Link>
            {
                currentUser ?
                    (<div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>) :
                    (
                        <Link className="option" to="/signin">Sign In</Link>
                    )
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);
