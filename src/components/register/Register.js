
import axios from 'axios'
import React, {useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'

import { createBrowserHistory } from 'history'
const API_BASE = "http://localhost:8800/api/"

const Register = () => {
    const username = useRef()
    const password = useRef()
    const email = useRef()
    const passwordAgain = useRef()
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCostomValidity('passwords dont match')
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                await axios.post(API_BASE + 'auth/register', user)
                navigate('/login')
                
            }catch(err){
                console.log(err)
                
            }
        }
    }
  return (
    <div className='loginn'>
      <div className='login_text'>
            <h2 className='login_logo'>Nectar</h2>
            <span className='login_moto'>Love, friendship and music</span>
        </div>

        <form className='register_cnt' onSubmit={handleClick}>
                <div className='ligin_items'>
                <input 
                placeholder='username' 
                ref={username} 
                required/>
            </div>
                <div className='ligin_items'>
                <input 
                placeholder='email' 
                ref={email} required 
                type='email'/>
            </div>

            <div className='ligin_items'>
                <input 
                placeholder='password' 
                ref={password} required 
                type='password'
                minLength='6'/>
            </div>
            <div className='ligin_items'>
                <input placeholder='password again' ref={passwordAgain} required type='password'/>
            </div>
            <div className='login_btm'>
                <button className='ligin_btn' type='submit'>sign up</button>
                
            <Link to='/login'>
            <button className='register_btn'>Log in</button>
            </Link>
            
            </div>

        </form>
    </div>
  )
}

export default Register
