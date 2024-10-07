import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../public/Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [user, SetUser] = useState(null);
  const auth = getAuth(app);

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      SetUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ googleSignIn, gitHubSignIn, user, logOutUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthProvider;