import { takeLatest, put, call, all } from 'redux-saga/effects';

import { UserTypes } from '../User/user.types';

import { clearCart } from './cart.actions';

function* clearCartOnSignOutSuccess() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess)
}

export function* cartSagas() {
    yield (all([call(onSignOutSuccess)]))
}