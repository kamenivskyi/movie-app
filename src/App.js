import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import ButtonToTop from "./components/ButtonToTop";
import Routes from "./routes";
import { setUserData } from "./redux/firebase/firebaseActions";
import { auth } from "./firebase/firebaseUtils";
import HomeState from "./context/homePage/HomeState";
import "./App.css";

const App = () => {
  const { userData } = useSelector(({ firebase }) => firebase);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("fired auth from app");
        dispatch(setUserData(userAuth));
      }
    });
  }, [dispatch]);

  console.log("app user", userData);

  return (
    <HomeState>
      <Navbar />
      <Routes />
      <ButtonToTop />
    </HomeState>
  );
};

export default App;
