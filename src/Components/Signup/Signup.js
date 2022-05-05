import React from 'react'
import {Link} from "react-router-dom";
import "./Signup.css";
import Button from '@mui/material/Button';

const Signup = () => {

  return (
    <>
       <h1 className='sig'>SignUp</h1>
    <div className="Signup">
    <form className='registation'>
    <label for="mail">User Email</label>
    <input className="email" name="email" type="email" placeholder='Email' />
    <label for="uname">User Name</label>
    <input className="username" name="username" type="text" placeholder="Username"/>
    <label for="password">Password</label>
    <input className="password" name="password"
       placeholder="Password"
         
       />
    <Button style={{marginTop:"20px"}} variant="contained">Submit</Button>
    <p id="signinLink" style={{fontWeight:"500",marginTop:"31px",marginLeft:"190px"}}> Already a user? <Link to="/GoogleKeep"><span style={{color:"#0091ea"}}>Login</span></Link> </p>
    </form>
    </div>
    
    
    </>
  )
}

export default Signup




