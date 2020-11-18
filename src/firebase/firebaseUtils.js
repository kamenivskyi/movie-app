import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZTVptyziGg-g-BKZk3YJKJkolbuDRVds",
  authDomain: "movie-finder-1.firebaseapp.com",
  databaseURL: "https://movie-finder-1.firebaseio.com",
  projectId: "movie-finder-1",
  storageBucket: "movie-finder-1.appspot.com",
  messagingSenderId: "679278906567",
  appId: "1:679278906567:web:c893f256addb1dbbcb02e2",
  measurementId: "G-DQYYSDG34N",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(userAuth);

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    console.log(displayName);

    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const createUserOwnBookmarksArray = async (userAuth) => {
  if (!userAuth) return;

  const bookmarksRef = db.doc(`userBookmarks/${userAuth.uid}`);

  const snapshot = await bookmarksRef.get();

  if (!snapshot.exists) {
    bookmarksRef.set({ tv: [], movie: [] });
  }

  return bookmarksRef;
};

export const signInUser = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
};

export const addToDatabaseBookmarks = (data, mediaType) => {
  try {
    if (auth.currentUser) {
      db.doc(`userBookmarks/${auth.currentUser.uid}`).update({
        [mediaType]: firebase.firestore.FieldValue.arrayUnion(data),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteBookmark = (bookmark, type) => {
  const user = auth.currentUser;

  if (user) {
    db.doc(`userBookmarks/${user.uid}`).update({
      [type]: firebase.firestore.FieldValue.arrayRemove(bookmark),
    });
  }
};

export const updateUserProfile = (nickname) => {
  if (auth.currentUser) {
    db.doc(`users/${auth.currentUser.uid}`)
      .update({ nickname })
      .then(() => {
        alert("Your username is updated! We need to reload app");
        window.history.go(0);
      })
      .catch((err) => console.log(err));
  }
};

export const createUser = async (nickname, email, password) => {
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      db.doc(`userBookmarks/${user.uid}`).set({ tv: [], movie: [] });
      db.doc(`users/${user.uid}`).set({ nickname, email });
    })
    .catch((err) => console.log(err));
};

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
