import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import "./Signup.css";
import Button from '@mui/material/Button';
import { Service } from '../../Services/Service';
import { Alert } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

const Signup = () => {

  const [signUpData, setSignUpData] = useState({username: "", email:"", password: ""});
  // const [snackBar, setSnackbar] = useState({message:"", type:""})
  const navigate = useNavigate()

  const signUp=()=>{
    Service.signUp(signUpData).then(data=>{
      // setSnackbar({message: "Successfully Submitted !!", type:"sucess"})
      navigate("/GoogleKeep")
      
    }).catch(err=>{
      console.log(err)
      // setSnackbar({message: err.response.data.message, type:"error"})
    })
  }

//   const handleClose=()=>{
//     setSnackbar({message: "", type:""})
// }

  const changeHandler=(e)=>{
    let name=e.target.name
    setSignUpData((prev)=>({
        ...prev,
        [name] : e.target.value
    }))
  }

  return (
    <>
       <h1 className='sig'>SignUp</h1>
    <div className="Signup">
    <form className='registation'>
    <label for="mail">User Email</label>
    <input className="email" name="email" type="email" placeholder='Email' value={signUpData.email} onChange={(e)=>changeHandler(e)}/>
    <label for="uname">User Name</label>
    <input className="username" name="username" type="text" placeholder="Username" value={signUpData.username} onChange={(e)=>changeHandler(e)}/>
    <label for="password">Password</label>
    <input className="password" name="password"
    type="password"
       placeholder="Password"
        value={signUpData.password}
        onChange={(e)=>changeHandler(e)}
       />
    <Button style={{marginTop:"20px"}} variant="contained" onClick={()=>signUp()}>Submit</Button>
    <p id="signinLink" style={{fontWeight:"500",marginTop:"31px",marginLeft:"190px"}}> Already a user? <Link to="/GoogleKeep"><span style={{color:"#0091ea"}}>Login</span></Link> </p>
    </form>
    </div>
    {/* {snackBar.message && <Snackbar open={true} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:"top",horizontal:"right"}}>
            <Alert onClose={handleClose} severity={snackBar.type} sx={{ width: '100%' }}> {snackBar.message} </Alert>
        </Snackbar>} */}
    </>
  )
}

export default Signup




