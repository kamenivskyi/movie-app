import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import ButtonToTop from "./components/ButtonToTop";
import Routes from "./routes";
import { setUserData } from "./redux/firebase/firebaseActions";
import { auth } from "./firebase/firebaseUtils";
import HomeState from "./context/homePage/HomeState";

import "./global.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(setUserData(userAuth));
      }
    });
  }, [dispatch]);

  return (
    <HomeState>
      <Navbar />
      <Routes />
      <ButtonToTop />
    </HomeState>
  );
};

export default App;
