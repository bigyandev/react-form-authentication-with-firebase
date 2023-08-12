import React, { createContext, useContext, useEffect,useState } from "react"
import { auth } from "../firebase.js"



const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    

   const [currentUser, setCurrentUser] = useState({})
   const registerForm = (email,password) => {
    return  auth.createUserWithEmailAndPassword(email,password)
 }

   
   useEffect(() => {
    auth.onAuthStateChanged(data => {
        setCurrentUser(data)
    })
},[])

const value = {
    currentUser,
    registerForm
}



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}