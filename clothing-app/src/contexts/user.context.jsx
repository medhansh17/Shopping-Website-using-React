import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
export const UserContext = createContext({}); //actual value you want to use

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // use-state re-renders components in which it is called
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });
    
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  //wrapping app in UserContext.Provider so that all children of app also have access to UserContext.
};
