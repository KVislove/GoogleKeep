import React  from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';


function App() {

  return (
    <>
      <Routes>
        <Route path='/GoogleKeep' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
