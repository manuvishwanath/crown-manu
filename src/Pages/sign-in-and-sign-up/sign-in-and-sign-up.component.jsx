import React from 'react'

import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../Components/SignIn/SignIn.Component'
import SignUp from '../../Components/SignUp/SignUp.Component'

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);


export default SignInAndSignUp;