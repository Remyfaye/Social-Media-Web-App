

import React from 'react'
import {Users} from '../../dummyData'
import './online.css'

const Online = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='onlineimg'>

      {Users.map((user) => (
        <div className='online_object'>
            <div className='online_dot'></div>
            <img src={PF + user.profilepicture} className='onlineimg_main'/>
        </div>
        

      ))}

    </div>
  )
}

export default Online
