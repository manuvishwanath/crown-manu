import { takeLatest, all, call, put } from 'redux-saga/effects';

import { UserTypes } from "./user.types";

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import {
    signInSuccess, signInFailure,
    signOutSuccess, signOutFailure,
    signUpSuccess, signUpFailure
} from './user.actions';

function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* SignInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, SignInWithGoogle)
}

export function* SignInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch (signInError) {
        yield put(signInFailure(signInError))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, SignInWithEmail)
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth)
            return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {

    }
}
export function* onCheckUserSession() {
    yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* signUpUser({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        // yield createUserProfileDocument(user, { displayName });
        yield put(signUpSuccess({ user, displayName }))
    } catch (signInError) {
        yield put(signUpFailure(signInError))
    }
}

export function* onUserSignUp() {
    yield takeLatest(UserTypes.SIGN_UP_START, signUpUser)
}

export function* afterSignIn({ payload: { user, displayName } }) {
    yield getSnapshotFromUserAuth(user, displayName)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserTypes.SIGN_UP_SUCCESS, afterSignIn)
}

function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserTypes.SIGN_OUT_START, signOutUser)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession),
    call(onSignOutStart), call(onUserSignUp), call(onSignUpSuccess)]);
}