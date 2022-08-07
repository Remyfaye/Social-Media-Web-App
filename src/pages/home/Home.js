import {useEffect, useState} from 'react'
import Header from '../../components/header/Header'
import './home.css'
import Online from '../../components/online/Online'
import Post from '../../components/posts/Post'
import Feed from '../../components/feed/Feed'
import Bottombar from '../../components/bottombar/Bottombar';
import axios from 'axios'
import Share from '../../components/share/Share'
const API_BASE = "http://localhost:8800/api/"

const Home = ({username}) => {
  const [posts, setPosts] = useState([])

  
  return (
    <div className="App">
      <div className='header'>
      <Header/>
      </div>
      
      <Online/>

      <div className='posts'>
      <Feed/>
      </div>
      

      {/* <Share/> */}

      {/* <div className='bottombar'>
          <Bottombar/>
          </div> */}
      
     
    </div>
  )
}

export default Home
