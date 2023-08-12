import React, { useEffect, useState,useRef } from "react"
import { useAuth } from "../context/AuthContext.jsx"


const RegisterForm = ({setIsRegister, isRegister}) => {
   
    const [errMsg, setErrMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const myEmail = useRef()
    const myPassword = useRef()
    const myConfirmPassword = useRef()
    const {registerForm, currentUser} = useAuth()

    const handleLogin = () => {
        setIsRegister(() => !isRegister)
        
    }
    const handleRegister = async (e) => {
        e.preventDefault()
        if(myPassword.current.value !== myConfirmPassword.current.value) {
           return setErrMsg("please type in the correct password")
        }
        try {
            setErrMsg("")
            setLoading(true)
        await registerForm(myEmail.current.value, myPassword.current.value)
        }
        catch(err) {
            setErrMsg(err.message)
            console.log(err)
        }
        setLoading(false)

    }
    console.log(currentUser)
    return (
      
            <>
            <h1>BLOG</h1>
            <h2>REGISTER!!!</h2>
            <p style={{color: "red"}}>{errMsg}</p>

            <input type="text" 
            placeholder="enter your mail" 
            ref={myEmail}/>
            <input type="password" 
            ref={myPassword}
            placeholder="enter password" />
            <input type="password" 
            placeholder="RE-ENTER YOUR PASSWORD"
            ref={myConfirmPassword} />
            
            <button disabled={loading} onClick={handleRegister}>REGISTER</button>
            <p>Already Registered?</p>
            <button  onClick={handleLogin}>LOGIN</button>
            </>
    )
}

export default RegisterForm