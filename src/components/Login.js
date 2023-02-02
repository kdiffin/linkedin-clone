import React, { useState } from "react";
import "./css-files/Login.css";
import { firebaseAuth } from "../firebase";

import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  function loginToApp(e) {
    e.preventDefault();

    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  }

  function register() {
    if (!name || name.length < 2) {
      return alert("please enter a full name!");
    }

    //we take the firebaseAuth from our firebase.js file
    //then use the  .createUserWithEmailAndPassword firebase function to make the user
    // after that we access the user object using userauth.user
    //update that user with updateprofile, displayName and photoURL have to be typed exactly as is
    // and then we use dispatch to add that info to our redux state

    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt=""
      />

      <form>
        <input
          value={name}
          autoComplete="on"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (required if registering)"
        />

        <input
          value={profilePic}
          autoComplete="on"
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic Url(optional)"
          type="text"
        />

        <input
          type="email"
          autoComplete="on"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          autoComplete="on"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
