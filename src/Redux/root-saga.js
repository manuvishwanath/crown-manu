import { call, all } from 'redux-saga/effects';


import { fetchCollectionStart } from './shop/shops.saga';
import { userSagas } from './User/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
    yield all([call(fetchCollectionStart), call(userSagas), call(cartSagas)]);
}