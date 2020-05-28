import { UserTypes } from './user.types'

export const setCurrentUser = user => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
    type: UserTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserTypes.SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: UserTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = (emailAndPassword) => ({
    type: UserTypes.SIGN_UP_START,
    payload: emailAndPassword,
});

export const signUpSuccess = (user) => ({
    type: UserTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailure = (error) => ({
    type: UserTypes.SIGN_UP_FAILURE,
    payload: error
})