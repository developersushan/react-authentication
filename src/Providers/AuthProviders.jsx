import { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
const auth = getAuth(app)
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
    const [user,setUser] = useState(null)
    /*create user with email and password*/
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    /*create singIn user authentication*/
    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    /*onAuthChange authentication*/
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return()=>{
            unSubscriber()
        }
    },[])
    /*logOut authentication */
    const logOut =()=>{
        signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        logOut,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;