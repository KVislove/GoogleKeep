import React, { useEffect, useState } from 'react'
import { KvLocalStorage } from '../Utils/KvLocalStorage'
import Logout from './Logout/Logout'

const Header = () => {
    const [username, setUserName]= useState("")
    useEffect(() => {
      let userInfo=KvLocalStorage.getUserInfo()
      setUserName(userInfo.userName)
      console.log(userInfo.userName)
    }, [username])
    
    
    return (
        <>
            <div className='header'>
                <h3> @GOOGLE KEEP </h3>
                <div className="logout-div"><Logout username={username}/></div>
                
            </div>
        </>
    )
}

export default Header