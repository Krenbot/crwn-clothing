import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(() => { })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}; 