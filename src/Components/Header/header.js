import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import Avatar from '../image/avatar.png'
import { motion } from "framer-motion";


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase/firebase.config'


const Header = () => { 

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const result = await signInWithPopup(firebaseAuth, provider)
    console.log(result)
  }



  return(
    <div className='header'> 
      <div className="header-left">
        < Link to='/' ><img className='header_icon' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' /></Link>
        < Link to='/movies/popular' style={{ textDecoration: 'none' }}> <span>Popular</span></Link>
        < Link to= '/movies/top_rated' style={{ textDecoration: 'none' }} ><span>Top Rated</span></Link>
        < Link to='/movies/upcoming' style={{ textDecoration: 'none' }} ><span>Upcoming</span></Link>
      </div>
      <div className="header-right"> 
        <motion.img
          whileTap={{ scale: 0.7 }}
          src={Avatar}
          className='userimage'
          alt="userprofile"
          onClick={login}
        />
      </div>
    </div>
  )
}

export default Header;