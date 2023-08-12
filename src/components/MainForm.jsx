import React, { useState } from "react"
import LoginForm from "./LoginForm"
import Registerform from "./RegisterForm"
import "./MainForm.css"
import { AuthProvider } from "../context/AuthContext.jsx"

const MainForm = () => {
   

    const [isRegister, setIsRegister] = useState(false)
    

    return (
        <>
        <AuthProvider>
        <div  className="login-card">
          <div className="inner-card">
            <div className="front-card">
            {isRegister ? <LoginForm setIsRegister={setIsRegister} isRegister={isRegister} /> : 
            <Registerform setIsRegister={setIsRegister} isRegister={isRegister}/>}
            </div>
            
           
          
          </div>
        </div>
        </AuthProvider>
        </>
    )
}
export default MainForm