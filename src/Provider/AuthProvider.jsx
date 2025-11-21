import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const Logout = () => {
  return signOut(auth);
};

const SignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    Logout,
    SignIn,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
