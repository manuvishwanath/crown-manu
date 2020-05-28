import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../Redux/cart/cart.selector'
import { selectCurrentUser } from '../../Redux/User/user.selector'
import { signOutStart } from '../../Redux/User/user.actions';

import { ReactComponent as Logo } from '../../Assets/crown.svg';
import CartIcon from '../CartIcon/cartIcon.component';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles'

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>
            <OptionLink to="/shop">
                Contact Us
            </OptionLink>
            {
                currentUser ?
                    (<OptionDiv onClick={signOutStart}>
                        Sign Out
                    </OptionDiv>) :
                    (
                        <OptionLink to="/signin">Sign In</OptionLink>
                    )
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
