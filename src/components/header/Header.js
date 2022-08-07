import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './header.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='header_wrapper'>
      <div className='header_container'>

      <div className='header_top'>
        <span className='logo'>Nectar</span>
        <Link to={`/profile/${user.username}`}>
        <img alt='' src={PF + user.profileimg} className='headerimg'/>
        </Link>
        
      </div>

      <div className='header_bottom'>
        
        
        <div className='searchInput_container'>
        <SearchIcon className='search_icon'/>
        <input type='text' className='search_input' placeholder='searchbar'/>
        </div>
        
      </div>

      </div>
     

    </div>
  )
}

export default Header
