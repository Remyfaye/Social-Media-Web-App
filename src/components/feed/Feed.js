
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

import {Posts} from '../../dummyData'
import { AuthContext } from '../../context/AuthContext'
import Post from '../posts/Post'
const API_BASE = "http://localhost:8800/api/"


const Feed = ({username}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    // const [posts, setPosts] = useState([])
    // const {user} = useContext(AuthContext)

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = username
    //         ? await axios.get(API_BASE + "posts/profile/" + username)
    //         : await axios.get(API_BASE + 'posts/newpost/')
    //         setPosts(res.data.sort((p1,p2) => {
    //             return new Date(p2.createdAt) - new Date(p1.createdAt)
    //         }))
    //     }
    //     fetchPosts()
    // }, [username, user._id])

  return (
    <div>

        <div className='posts'>
            
            {Posts.map(p => (
                <Post key={p._id} post={p}/>
            ))}
        </div>
    
    </div>
  )
}

export default Feed
