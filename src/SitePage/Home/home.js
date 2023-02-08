import React, { useEffect, useState } from 'react'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {


  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))

  },[])



  return (
    <div>
          <>
          Home Page   
          </>
    </div>
  )
}

export default Home
