import React,{useState, useEffect, useContext} from 'react'

import './profile.css'
import SearchIcon from '@mui/icons-material/Search'
import {Posts} from '../../dummyData'
import Bottombar from '../../components/bottombar/Bottombar'
import Feed from '../../components/feed/Feed'

import axios from 'axios'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router'
import { AuthContext } from '../../context/AuthContext'
const API_BASE = "http://localhost:8800/api/"



const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const username = useParams().username
  const [users, setUsers] = useState({})
  const [posts, setPosts] = useState({})
  const {playlistNo, setPlaylistNo} = useState([])
 

  useEffect(() => {
    const fetchUser = async () => {
        const res = await axios.get(API_BASE +`users?username=${username}`)
        setUsers(res.data)
    }
    fetchUser()

    const fetchPosts = async () => {
        const res = await axios.get(API_BASE +`posts/profile?username=${username}`)
        setPosts(res.data)
        console.log(posts)
    }
    fetchPosts()

    // const getPlaylistsNo = async () => {
    //   const friendList = await axios.get(API_BASE + 'users/playlist/' + users._id)
    //   setPlaylistNo(friendList.data)
    // }
    // getPlaylistsNo()
    
  },[username, users._id])

  
  return (
    <div className='profile_wrapper'>
        <div className='profile_icons'>
            <SearchIcon/>
        </div>
      <div className='profile_top'>

        <div className='top_left'>
            <span></span>
            <span>Playlists</span>
        </div>

        <div className='top_center'>
            <img src={PF + users.profileimg}className='profilePage_img'/>
            <span>{users.username}</span>
        </div>

        <div className='top_left'>
            {/* <span>{playlistNo.length}</span> */}
            <span>Posts</span>
        </div>
      </div>

      <div className='profile-center'>
        <div className='center_item'>
            <span className='center_list_item'>Delete</span>
            <span className='center_list_item'>Message</span>
        </div>
      </div>

      <div className='profile_btm'>
        <div className='btm_top'>
            <span className='btm_text'>Posts</span>
            <span className='btm_text'>Playlists</span>
            <span className='btm_text'>saved</span>
        </div>
         
      </div>

      

          <div className='bottombar'>
              <Bottombar/>
              </div>
    </div>
  )
}

export default Profile
