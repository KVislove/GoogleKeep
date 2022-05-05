import React from "react";
import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';
import { useNavigate } from "react-router-dom";
import { KvLocalStorage } from "../../Utils/KvLocalStorage";
import "./logout.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Logout=(props)=>{
    const options=[{ value: 'logout', label: 'logout', className: 'logout-option' },];
    const navigate= useNavigate()
    const logout=()=>{
        KvLocalStorage.clear()
        navigate('/GoogleKeep')
    }
    return(
        <>
            <div style={{display:"flex", flexDirection:"row"}}>
            <AccountCircleIcon className="circle-icon"/>
            <ReactDropdown controlClassName="dropdown" menuClassName="menu" 
            arrowClassName="arrow" options={options} 
            value={props.username.toUpperCase()} onChange={()=>logout()}/>  
            </div>
        </>
    )
}

export default Logout;