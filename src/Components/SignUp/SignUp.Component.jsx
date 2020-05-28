import React, { useState } from 'react';
import { connect } from 'react-redux'

import './SignUp.Styles.scss';
import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import { signUpStart } from "../../Redux/User/user.actions";

const SignUp = ({ signUpStart }) => {

    const [userDetails, setUserDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = userDetails;

    const handleSubmit = async (event) => {
        event.preventDefault();
        //const { signUpStart } = this.props;

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match!!")
            return;
        }
        signUpStart(displayName, email, password);
    }

    const handelChange = (event) => {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value });
    }

    // just for demarcation left the flower brackets

    //const { displayName, email, password, confirmPassword } = this.state;
    return (
        <div className="sign-up">
            <h2 className="title"> I do not have an account </h2>
            <span >Sign up with email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text"
                    name="displayName"
                    value={displayName}
                    label="Display Name"
                    onChange={handelChange}
                    required
                />
                <FormInput type="email"
                    name="email"
                    value={email}
                    label="Email"
                    onChange={handelChange}
                    required
                />
                <FormInput type="password"
                    name="password"
                    value={password}
                    label="Password"
                    onChange={handelChange}
                    required
                />
                <FormInput type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    onChange={handelChange}
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => (
    {
        signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
    })

export default connect(null, mapDispatchToProps)(SignUp);