import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

export const TextileContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const TextileProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [craftItems, setCraftItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [categoryArt, setCategoryArt] = useState(null)


    useEffect(() => {
        fetch('https://art-and-craft-server-alpha.vercel.app/craft_items')
            .then(res => res.json())
            .then(data => {
                setCraftItems(data)
            })
    }, [])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginWIthGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const updateUserProfile = () => {
        setLoading(true)
        return updateProfile(auth.currentUser)
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser)
             console.log('user is existing and observing ', currentUser);
             setLoading(false)
             console.log(loading, 'observer');
         })
         return(()=>{
             unSubscribe()
         })    
     })

    const textileInfo = {
        createUser,
        loginUser,
        loginWithGoogle,
        logOutUser,
        user,
        updateUserProfile,
        craftItems,
        loading,
        setLoading,
        loginWIthGithub,
        categoryArt, 
        setCategoryArt
    }

    
    return (
        <div>
            <TextileContext.Provider value={textileInfo}>
                {children}
            </TextileContext.Provider>
        </div>
    );
};

export default TextileProvider;