
import ShopActionsTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FALIURE,
    payload: errorMessage
})

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        // starts the loading symbol by is loading to true
        dispatch(fetchCollectionsStart);

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
}