"use client"
import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile, GithubAuthProvider } from 'firebase/auth';
import { app } from '@/Firebase/Firebase'; // Import your Firebase configuration here

export const Authcontext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };

    const signIn = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        };
    }, []);

    const googleAuthProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleAuthProvider);
    };
    const githubAuthProvider = new GithubAuthProvider();
    const signInWithGithub = () => {
        // setLoading(true)
        return signInWithPopup(auth, githubAuthProvider);
    };

    const authData = {
        currentUser,
        createUser,
        updateUserProfile,
        signIn,
        logout,
        signInWithGoogle,
        signInWithGithub,
        loading,
        setLoading,
    };

    return (
        <Authcontext.Provider value={authData}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;
