

import React, { useEffect, useState } from 'react'
import {format} from 'timeago.js'
import './post.css'
import {Users} from '../../dummyData'

import axios from 'axios'
import { Link } from 'react-router-dom'
const API_BASE = "http://localhost:8800/api/"

const Post = ({post}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const users = Users.filter( (u) => (u.id === post.userId))
    // const [users, setUsers] = useState({})

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const res = await axios.get(API_BASE + `users?userId=${post.userId}`)
    //         setUsers(res.data)
    //     }
    //     fetchUser()
    // },[post.userId])

  return (
    <div className='post_wrapper'>
      
        <div
        >
            
            {/* <div className='postImg_cnt'>
                {post.postimg 
                ?<img src={ PF + post.postimg} className='postimg'/>
                : <span></span>
                }
             
            </div> */}
          
            <div className='post_btm'>
                
   

                  {users.map((user) => (
                    
                    
                    <div className='post_profile'>  
                        <img src={PF + user.profilepicture} className='profileimg' />

                        <div className='post_username'>
                    
                        {user.username}
                    
                    </div>
                    
                        
                    </div>
               
                      


                  ))}
                

            </div>

            
            <div className='post_info'>
                    
                    <div>
                        {post.desc}
                    </div>

                    <div className='timeago'>{format(post.createdAt)}</div>
                    
                </div>


            <div className='postImg_cnt'>
                {post.photo
                ?<img src={ post.photo} className='postimg'/>
                : <span></span>
                }</div>
             
            
            
           
          
        </div>
        
    </div>
     
    
  )
}

export default Post
