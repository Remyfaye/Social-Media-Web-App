

import React, { useContext, useRef, useState } from 'react'
import './share.css'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import DuoRoundedIcon from '@mui/icons-material/DuoRounded';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
const API_BASE = "http://localhost:8800/api"

const Share = () => {
  const {user} = useContext(AuthContext)
  const [btnState, setBtnState] = useState(false)
  const desc = useRef()
  const [file, setFile] = useState(null)

  const toggleBtnState = () => {
    if(btnState){
      setBtnState(false)
    }else{
      setBtnState(true)
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId : user._id,
      desc: desc.current.value
    }
    if(file){
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append('name', fileName)
      data.append('file', file)
      newPost.postimg = fileName
      try{
        await axios.post(API_BASE + '/upload', data)

      }catch(err){
      console.log(err)
      }
    }
    try{
      await axios.post(API_BASE + '/posts/newpost', newPost)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='share_wrapper'>


      {
      btnState 
      ? <form className='share_options' onSubmit={submitHandler}>

      <label htmlFor='file' className='share_list_items'>
        <span>photos</span>
        <CropOriginalRoundedIcon/>
        <input 
        style={{display:'none'}}
        type='file' 
        id='file' 
        accept='.png,.jpeg,.jpg'
        onChange={(e) => setFile(e.target.files[0])}/>
      </label>

      

      <div className='share_list_items'>
        <span>videos</span>
        <DuoRoundedIcon/>
      </div>

      


      {/* <div className='share_list_items'>
        <span>text</span>
        <NotesRoundedIcon/>
      </div> */}

{file && (
        <div className='shareimg_wrapper'>
          <img className='shareimg' src={URL.createObjectURL(file)}/>
          <span className='cancel' onClick={() => setFile(null)}>X</span>
        </div>
      )}
      
      <input 
      style={{width:"60%"}}
      placeholder='caption'
      ref={desc}/>

      <button className='share_btn' type='submit'>
        <span>Post</span>
        
      </button>

        </form> 
      : null
      }

      

      <div className='share_plus' onClick={toggleBtnState}>
        <span>+</span>
      </div>

    </div>
  )
}

export default Share
