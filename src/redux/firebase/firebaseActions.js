import Types from './firebaseTypes';

import MovieService from '../../services/movie-service';
import firebase, {
  db,
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase';

// import {
//   SET_LOADING,
//   SET_USER,
//   LOG_OUT,
//   GET_BOOKMARKS,
//   SET_USER_DATA
// } from '../types';

const { getPersonById } = new MovieService();

// const docBookmarks = user && db.collection('userBookmarks').doc(user.uid);

export const getPerson = (id) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    const data = await getPersonById(id);

    dispatch({ type: Types.GET_PERSON, payload: data });
  } catch (error) {
    dispatch({
      type: Types.GET_PERSON_ERROR,
      payload: error.response,
    });
  }
};

// export const signinUser = (email, password) => async (dispatch) => {
//   try {
//     auth.signInWithEmailAndPassword(email, password).then((res) => {
//       dispatch({ type: Types.SET_USER_SIGNIN });

//       if (res) {
//         console.log('its ok! from redux');
//         console.log(res);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getBookmarks = () => async (dispatch) => {
  try {
    const docBookmarks = db
      .collection('userBookmarks')
      .doc(auth.currentUser.uid);

    if (auth.currentUser) {
      dispatch(seBookmarkstLoading());
      // setLoading();

      docBookmarks.onSnapshot((doc) => {
        dispatch({ type: Types.GET_BOOKMARKS, payload: doc.data() });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addToBookmarks = (data, mediaType) => async (dispatch) => {
  try {
    if (auth.currentUser) {
      db.collection('userBookmarks')
        .doc(auth.currentUser.uid)
        .update({
          [mediaType]: firebase.firestore.FieldValue.arrayUnion(data),
        });
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUserData = (userAuth) => async (dispatch) => {
  try {
    // db.collection('users').doc(auth.uid)
    db.collection('users')
      .doc(userAuth.uid)
      .get()
      .then((doc) => {
        console.log('from setUserData');
        dispatch({ type: Types.SET_USER_DATA, payload: doc.data() });
      });
  } catch (error) {
    console.log(error);
  }
};

export const seBookmarkstLoading = () => ({
  type: Types.SET_BOOKMARKS_LOADING,
});
