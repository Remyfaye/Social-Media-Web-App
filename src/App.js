import {useState,useEffect} from 'react'
import './App.css';
import Login from './components/login/Login';

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Register from './components/register/Register';
import Bottombar from './components/bottombar/Bottombar';
import { AuthContext } from './context/AuthContext';
import {useContext} from 'react'
import Messages from './pages/messages/Messages';


function App() {
	const {user}= useContext(AuthContext)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Register/>}></Route>

        <Route path='/profile/:username' element={<Profile/>}></Route>

        <Route path='/chats' element={<Messages/>}></Route>
        
        <Route path='/login'  element={user ? <Navigate replace to='/'/> :<Login/>}> </Route>
      
        
        <Route path='/register' element={user ? <Navigate replace to='/'/>:<Register/> }></Route>
         
      </Routes>

      
  
      
      
      {/* <Home/> */}
    {/* <Profile/> */}
    {/* <div className='login'>
    <Login/>
    </div> */}
      </BrowserRouter>

      

      
	</>	
    
    

		
			
  )
}

export default App;
