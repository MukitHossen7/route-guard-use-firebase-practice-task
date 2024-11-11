/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createSignUpNewUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInExistingUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
