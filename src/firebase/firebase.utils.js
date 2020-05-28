import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC_kVPO_kkWhXXT1r4vIU_1ChpnI1KM_0E",
    authDomain: "react-crownprjt.firebaseapp.com",
    databaseURL: "https://react-crownprjt.firebaseio.com",
    projectId: "react-crownprjt",
    storageBucket: "react-crownprjt.appspot.com",
    messagingSenderId: "566367850465",
    appId: "1:566367850465:web:f3c84265933759f8874ca0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) { return; }
    // console.log('==============userAuth==============')
    // console.log(userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log('==============User Ref==============')
    // console.log(userRef);
    const userSnap = await userRef.get();
    // console.log('==============User Snapshot==============')
    // console.log(userSnap);
    if (!userSnap.exists) {
        const { displayName, email } = userAuth;
        const created = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                created,
                ...additionalData
            })
        }
        catch (anyError) {
            console.log("error on user details save: " + anyError.message);
        }
    }
    return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title),
            id: doc.id,
            title,
            items
        }
    }
    )
    console.log(transformedCollection);

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unSubscribeAuth = auth.onAuthStateChanged(userAuth => {
            unSubscribeAuth();
            resolve(userAuth);
        }, reject);
    })
}

