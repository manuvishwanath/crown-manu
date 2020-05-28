import { takeEvery, call, put } from 'redux-saga/effects'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import ShopActionsTypes from './shop.types';

import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions'

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionMap))
    } catch (error) {
        fetchCollectionFailure(error.message)
    }
}

export function* fetchCollectionStart() {
    yield takeEvery(
        ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    );
}