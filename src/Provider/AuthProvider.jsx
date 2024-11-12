/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const createSignUpNewUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInExistingUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
      console.log("User is signed in:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      connection();
      setUser(null);
    };
  }, []);

  const name = "Mukit";
  const authInfo = {
    name,
    createSignUpNewUsers,
    signInExistingUsers,
    user,
    logOut,
    loading,
    signInWithGoogle,
    signInWithGithub,
    forgetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
