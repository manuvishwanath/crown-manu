import React from 'react';

import './Custom-Button.Styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProp }) => (
    <button
        className={`${inverted ? 'inverted ' : ''}
                    ${isGoogleSignIn ? 'google-sign-in ' : ''}
                    custom-button`}
        {...otherProp}>
        {children}
    </button>
);

export default CustomButton;