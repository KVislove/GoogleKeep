import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/GoogleKeep' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
