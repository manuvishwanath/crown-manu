import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './App.css';
import SignInSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './Pages/homepage/homePage.component';
import ShopPage from './Pages/shop/ShopPage.component';
import Header from './Components/Header/header.component';
import Checkout from './Pages/Checkout/checkoutPage.component'

import { selectCurrentUser } from './Redux/User/user.selector';
import { checkUserSession } from './Redux/User/user.actions';

const App = ({ checkUserSession }) => {


  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])
  //const { checkUserSession } = this.props;

  // this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot(snapshot => {
  //       setCurrentUser({
  //         currentUser: {
  //           id: snapshot.id,
  //           ...snapshot.data(),
  //         }
  //       }, () => {
  //         // console.log('==============User snapshot==============')
  //         // console.log(snapshot);
  //       })
  //     });
  //   }
  //   else {
  //     setCurrentUser(userAuth);
  //   }

  //   // console.log('==============User state==============')
  //   // console.log(setCurrentUser);
  // });



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


const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
