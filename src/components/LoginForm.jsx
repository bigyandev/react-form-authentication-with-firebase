import React, { useEffect, useState } from "react"


const LoginForm = ({setIsRegister,isRegister}) => {
    const [name,setName] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("") 
   
    const handleRegister = () => {
        setIsRegister(() => !isRegister)
    }
    const handleLogin = () => {
        if(name.length > 0 && password.length > 0) {

        }
        else {
            setErrMsg("PLEASE ENTER DETAILS");
            setName("")
            setPassword("")
        }
    }
    useEffect(() => {
        setErrMsg("")
    },[name,password])
    
    return (
       <>
            <h1>BLOG</h1>
            <h2>LOGIN!!!</h2>
            <p style = {{color: "red"}}>{errMsg}</p>
            <input type="text" 
            placeholder="enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}/>

            <input type="password" 
            placeholder="enter password" 
            value = {password} 
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>LOGIN</button>
            <p>Haven't Registered yet?</p>
            <button onClick={handleRegister}>Register</button>
            </>
    )
}
export default LoginForm