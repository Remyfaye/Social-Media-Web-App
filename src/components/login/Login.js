import React, {useContext, useRef} from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import {AuthContext} from '../../context/AuthContext'
import { Link } from 'react-router-dom'


const Login = () => {

  const email = useRef()
  const password = useRef()
  const {user, isFetching, error,dispatch} = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault()
    loginCall({email:email.current.value, password:password.current.value}, dispatch)
  }
  console.log(user)
  return (
    <div className='loginn'>
      <div className='login_text'>
              <h2 className='login_logo'>Nectar</h2>
              <span className='login_moto'>Love, friendship and music</span>
          </div>

        <form className='login_wrapper' onSubmit={handleClick}>
          

            <div className='ligin_items'>
              <input 
              placeholder='email'
              type='email'
              ref={email}
              required/>
            </div>
            <div className='ligin_items'>
              <input 
              placeholder='password'
              type='password'
              minLength='6'
              ref={password}
              required/>
            </div>

            <div className='login_btm'>
              <button className='ligin_btn'>{isFetching ? 'loading...' : 'Log In'}</button>
              <span>forgot password?</span>

            <button className='register_btn'>
              <Link to='/register' style={{color:"wheat", textDecoration:"none", fontSize:"18px"}}>
            Create new Account
            </Link>

              
              </button>
            </div>

    </form>
    </div>
    
  )
}

export default Login
