import React from 'react';

import './SignUp.Styles.scss';
import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../Custom-Button/Custom-Button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match!!")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (authError) {
            console.log(authError);
        }
    }

    handelChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account </h2>
                <span >Sign up wiht email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text"
                        name="displayName"
                        value={displayName}
                        label="Display Name"
                        onChange={this.handelChange}
                        required
                    />
                    <FormInput type="email"
                        name="email"
                        value={email}
                        label="Email"
                        onChange={this.handelChange}
                        required
                    />
                    <FormInput type="password"
                        name="password"
                        value={password}
                        label="Password"
                        onChange={this.handelChange}
                        required
                    />
                    <FormInput type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm Password"
                        onChange={this.handelChange}
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;