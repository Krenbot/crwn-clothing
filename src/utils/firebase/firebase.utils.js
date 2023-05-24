import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA0YrcagSjP1gJxROqv0Zd810q7pcIquM",
    authDomain: "crwn-clothing-db-22773.firebaseapp.com",
    projectId: "crwn-clothing-db-22773",
    storageBucket: "crwn-clothing-db-22773.appspot.com",
    messagingSenderId: "926842747638",
    appId: "1:926842747638:web:0f77d258162fda32574ad7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};