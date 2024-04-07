import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {


    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [eye, setEye] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("db.json")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curUser) => {
            setUser(curUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const obj = {
        createUser,
        user,
        loading,
        signInUser,
        signInWithGoogle,
        logOut,
        resetPassword,
        data,
        eye, 
        setEye

    }

    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider