import React from 'react'

const MovieCard = () => {

const Poster = "https://www.omdbapi.com/src/poster.jpg"
  return (
    <div className='container movie-card-item'>
        <div className="row rounded-3 text-dark p-2">
            <div className="col-md">
                <img src={Poster} alt=''/>
            </div>
            <div className="col-md">
                <h3>Movie Name</h3>
                <p>Lorem ipsum dolor sit amet.

                </p>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-warning'>Drama</button>
                    <button className='btn btn-info'>Action</button>
                </div>
                <div>
                    <div className="d-grid mt-3">
                         <button className='btn btn-danger'>Action</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MovieCard
