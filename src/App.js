import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";

import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

import { firebaseAuth } from "./firebase";

function App() {
  //useSelector comes from the redux toolkit, for the params of it u just pass in the name of ur selector
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    //everytime the page reloads, it checks if i already have an account inside firebase
    //and if i do it sets the redux data of the account to the firebase data
    firebaseAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
