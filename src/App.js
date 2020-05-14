import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './App.css';
import SignInSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './Pages/homepage/homePage.component';
import ShopPage from './Pages/shop/ShopPage.component';
import Header from '../src/Components/Header/header.component';
import Checkout from '../src/Pages/Checkout/checkoutPage.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './Redux/User/user.actions'
import { selectCurrentUser } from './Redux/User/user.selector'

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          }, () => {
            // console.log('==============User snapshot==============')
            // console.log(snapshot);
          })
        });
      }
      else {
        setCurrentUser(userAuth);
      }
      // console.log('==============User state==============')
      // console.log(setCurrentUser);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/signin" render={
            () => this.props.currentUser ?
              <Redirect to='/' /> :
              <SignInSignUp />
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser
});

const dispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, dispatchToProps)(App);
