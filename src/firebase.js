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

export default firebase;
