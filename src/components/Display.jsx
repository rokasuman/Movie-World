import React from 'react'
import MovieCard from './MovieCard'

const Display = () => {
  return (

    <>
    <div className="container mt-5 rounded-5">
        <div className="bg-dark text-light">
        <div className="row">
            <div className="col">
                <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-warning">Drama</button>
             <button type="button" className="btn btn-danger">Action</button>
          </div>
          <div className='mt-3 text-light'> 2 movies. Listed</div>

            </div>
        </div>
        <div className="row mt-5 mb-5 p-4">
            <div className="col d-flex justify-content-between flex-wrap gap-3">
               { 
               new Array(6).fill("").map((item, i) =>(
                <div className='' key={i}>
                    <MovieCard/>

                </div>
               
               )
        
               )}
                    
            
                
                
            </div>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Display