import React, {  useEffect, useState } from 'react';

const GameTrailer = () => {

    useEffect(() => {
        fetchMovies()
      },[])
    
      const [movies, setMovies] = useState([])
    
      const fetchMovies = () => {
        fetch(`https://api.rawg.io/api/games/3498/movies`)
        .then(resp => resp.json())
        .then(({results}) => setMovies(results))
      }

    return (
        <div className="movie-content">
            {
            movies.map(movie => {
                return <pre>{JSON.stringify(movie)}</pre>
            })
            }
        {console.log(movies)}
        </div>
    )
}

export default GameTrailer