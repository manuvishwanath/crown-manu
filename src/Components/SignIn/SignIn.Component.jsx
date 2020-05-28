import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SignIn.Styles.scss';
import FormInput from '../Form-Input/Form-Input.component'
import CustomButton from '../Custom-Button/Custom-Button.component'
import SignUp from '../SignUp/SignUp.Component';
import { googleSignInStart, emailSignInStart } from "../../Redux/User/user.actions";

const SignInForm = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userCredentials;

    const handelSubmit = (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handelChange = (event) => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }


    return (
        <div className="sign-in">
            <h2>I already Have an Account</h2>
            <span>Sign in Here with user name and password</span>
            <form onSubmit={handelSubmit}>
                <FormInput name='email' type='email' required
                    value={email}
                    handelChange={handelChange}
                    label="Email:" />
                <FormInput name='password' type='password' required
                    value={password}
                    handelChange={handelChange}
                    label="Password:" />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign In With Google
                        </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignInForm);