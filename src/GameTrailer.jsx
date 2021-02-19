import React, {  useEffect, useState } from 'react';

const GameTrailer = () => {

    useEffect(() => {
        fetchMovies()
      },[])
    
      const [movies, setMovies] = useState([])
    
      const fetchMovies = () => {
        fetch(`https://api.rawg.io/api/games/3498`)
        .then(resp => resp.json())
        .then(({results}) => setMovies(results))
      }
      console.log(movies)
    return (
        <div className="movie-content">
            {
            movies.map(movie => {
                <ul key={movie.id}className="movie">
                <h1>TESTING!!{movie.id}</h1>
                </ul>
            })
         }
        {console.log(movies)}
        </div>
    )
}

export default GameTrailer