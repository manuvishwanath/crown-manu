import React from 'react';

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils'
import './SignIn.Styles.scss';
import FormInput from '../Form-Input/Form-Input.component'
import CustomButton from '../Custom-Button/Custom-Button.component'
import SignUp from '../SignUp/SignUp.Component';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handelSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (signInError) {
            console.log("sign-in error: " + signInError.message)
        }
    }

    handelChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already Have an Account</h2>
                <span>Sign in Here with user name and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput name='email' type='email' required
                        value={this.state.email}
                        handelChange={this.handelChange}
                        label="Email:" />
                    <FormInput name='password' type='password' required
                        value={this.state.password}
                        handelChange={this.handelChange}
                        label="Password:" />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm;