import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"; 

const AuthProvider= ({children})=>{
    const [user, setUser]= useState(null); 
    const [loading, setLoading]= useState(true); 

    const createUser= ()=>{
        setLoading(true); 
        return createUserWithEmailAndPassword(auth , email, password); 
    }
    const signInUser= ()=>{
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password); 
    }
    const logout= ()=>{
        setLoading(true); 
        return signOut(auth); 
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false); 
        });
        return ()=>{
            unsubscribe(); 
        }
    },[])

    const authInfo= {
        user,
        loading, 
        createUser, 
        signInUser,
        logout
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider; 