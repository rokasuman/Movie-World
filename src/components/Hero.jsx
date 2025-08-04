import React,{useEffect}from 'react'
import MovieCard from './MovieCard'
import { fetchFromAPI } from '../utils/axios'

const Hero = () => {
  useEffect (()=>{
    fetchFromAPI();
  }, []);

  const fetchMoive = async str =>{
    const movie = await fetchFromAPI(str);
    console.log(movie)

  }

  const movieStyle = {
    backgroundImage:`url("https://www.omdbapi.com/src/poster.jpg")`,

    backgroundRepeat:"no-reapeat",
    backgroundPosition:"center",
    backgroundSize : "cover",
    height: "60vh"
  }
  return (
    <div>
      <nav className=' text-danger text-top'>
       <h1 className='container' >MovieWorld</h1>
      </nav>
      
      <div className="hero d-flex flex-column justify-content-center align-items-center text-light" style={movieStyle}>
        <div className='form-container'>
          <div className="text-center">
            <h1>Search Millions Of Movies</h1>
            <p>Get the movies here before You Watch</p>
          </div>
        </div>
        
        <div className="input-group my-5 w-50">
         <input type="text" className="form-control" placeholder="Search for Movies" aria-label="Search For Movies" aria-describedby="button-addon2" />
          <button className="btn btn-danger" type="button" id="button-addon2">Button</button>
      
        </div>
        <div className="movie-card-container">
          <MovieCard/>
          
        </div>
      </div>
    </div>
  )
}

export default Hero