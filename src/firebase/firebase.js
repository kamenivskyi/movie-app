import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBZTVptyziGg-g-BKZk3YJKJkolbuDRVds',
  authDomain: 'movie-finder-1.firebaseapp.com',
  databaseURL: 'https://movie-finder-1.firebaseio.com',
  projectId: 'movie-finder-1',
  storageBucket: 'movie-finder-1.appspot.com',
  messagingSenderId: '679278906567',
  appId: '1:679278906567:web:c893f256addb1dbbcb02e2',
  measurementId: 'G-DQYYSDG34N'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userRef = userAuth.doc(`users/${userAuth.uid}`);

  console.log(userRef);

  const snapshot = await userRef.get();

  if (!userRef.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }

    console.log(snapshot);
  }
  return userRef;
};

export default firebase;
