import Types from './firebaseTypes';

import MovieService from '../../services/movie-service';
import { db, auth } from '../../firebase/firebaseUtils';

const { getPersonById } = new MovieService();

export const getPerson = (id) => async (dispatch) => {
  try {
    const data = await getPersonById(id);

    dispatch({ type: Types.GET_PERSON, payload: data });
  } catch (error) {
    dispatch({
      type: Types.GET_PERSON_ERROR,
      payload: error.response,
    });
  }
};

export const getBookmarks = () => (dispatch) => {
  try {
    const docBookmarks = db.collection('userBookmarks').doc(auth.currentUser.uid);

    if (auth.currentUser) {
      dispatch(setBookmarksLoading());

      docBookmarks.onSnapshot((doc) => {
        dispatch({ type: Types.GET_BOOKMARKS, payload: doc.data() });
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const setUserData = (userAuth) => (dispatch) => {
  try {
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

export const setBookmarksLoading = () => ({
  type: Types.SET_BOOKMARKS_LOADING,
});
