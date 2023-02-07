import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => { 
  return(
    <div className='header'> 
      <div className="header-left">
        < Link to='/' ><img className='header_icon' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' /></Link>
        < Link to= '/movies/popular' >Popular</Link>
        < Link to= '/movies/top_rated' >Top Rated</Link>
        < Link to= '/movies/upcoming' >Upcoming</Link>
      </div>
    </div>
  )
}

export default Header;