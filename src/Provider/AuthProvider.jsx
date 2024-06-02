import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.init";
// import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleProvider = new GoogleAuthProvider();
  //   const axiosPublic = useAxiosPublic();

  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google Login

  const GoogleIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const UpdateProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   if (currentUser) {
      //     // Get Token And Store Client
      //     const userInfo = { email: currentUser.email };
      //     axiosPublic.post("/jwt", userInfo).then((res) => {
      //       if (res.data.token) {
      //         localStorage.setItem("token", res.data.token);
      //       }
      //     });
      //   } else {
      //     // Remove Token
      //     localStorage.removeItem("token");
      //   }

      setLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const AuthInfo = {
    User,
    loading,
    CreateUser,
    SingIn,
    logOut,
    UpdateProfile,
    GoogleIn,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
