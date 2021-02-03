import React, {  useEffect, useState } from 'react';



const GameTrailer = () => {

    const [trailers, setTrailers] = useState('')

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/3498/movies`)
        .then(console.log)

    })
    return(
        <div>

        </div>
    )
}

export default GameTrailer