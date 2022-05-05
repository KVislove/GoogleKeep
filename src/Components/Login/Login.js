import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../../Services/Service";
import "./login.css";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import Modal from "react-modal/lib/components/Modal";
import CloseIcon from '@mui/icons-material/Close';
import "./Forget.css";

Modal.setAppElement("#root")
const Login=()=>{

    const [modalIsOpen, setModalIsOpen] = useState(false)

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
        
            <h1 className="hed">GOOGLE KEEP</h1>
        
        <div className="login-form">
                <h1>Login</h1>
                <input className="username" name="username" type="text" placeholder="Username" value={loginData.username} onChange={(e)=>changeHandler(e)}/>
                <input className="password" name="password" type="password" placeholder="Password" value={loginData.password} onChange={(e)=>changeHandler(e)}/>
                <Tooltip title="Login">
                <Button className="submit" variant="contained" onClick={()=>login()}>Login</Button>
                </Tooltip>
                <div >
                <Modal className="forgetpassword" isOpen={modalIsOpen}>
                
                <form className="fp">
                <h2 className="" >Forget Password <CloseIcon style={{marginLeft:"80px"}} onClick={()=> setModalIsOpen(false)}/></h2>
                <label for="mail">User Email</label>
                <input className="email" name="email" type="email" placeholder='Email' />
                <Button className="submit" variant="contained">Submit</Button>
                </form>                
            </Modal>
                </div>
                <Link to="" className="forgot-password" onClick={()=> setModalIsOpen(true)}>Forgotten password?</Link>
                <hr/>
                <Link to="/Signup">
                <Button className="create-account" variant="contained">Create Account</Button>
                </Link>
        </div>
        
        </>
    )
}

export default Login;