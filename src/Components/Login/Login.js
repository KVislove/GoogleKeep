import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../../Services/Service";
import "./login.css";

const Login=()=>{

    const navigate=useNavigate();
    const[loginData, setLoginData]=useState({username:"", password:""})
    const changeHandler=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        setLoginData((prevState)=>{
            return {...prevState,[name]:value}
        })
    }

    const login=()=>{
        Service.login(loginData).then(res=>{
            console.log(res)
            if(res.data.userId){
                window.localStorage.setItem("userInfo",JSON.stringify(res.data));
                navigate('/dashboard')
            }
            else
            alert("invalid user")
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <>
        <div className="login-form">
                <input className="username" name="username" type="text" placeholder="Username" value={loginData.username} onChange={(e)=>changeHandler(e)}/>
                <input className="password" name="password" type="password" placeholder="Password" value={loginData.password} onChange={(e)=>changeHandler(e)}/>
                <Button className="submit" variant="contained" onClick={()=>login()}>Login</Button>
                <a href="#" className="forgot-password">Forgotten password?</a>
                <hr/>
                <Button className="create-account" variant="contained">Create Account</Button>
        </div>
        </>
    )
}

export default Login;