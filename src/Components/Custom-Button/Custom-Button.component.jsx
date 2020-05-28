import React from 'react';

import { CustomButtonContainer } from './Custom-Button.Styles'

const CustomButton = ({ children, ...otherProp }) => (
    <CustomButtonContainer {...otherProp}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;