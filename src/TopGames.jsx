import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const TopGames = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  return (
    <div>
      <ul className="top-games">
      {
        games.map(game => (
          <ul key={game.id}>
            <Link to={{
                pathname: `/game/${game.name}`,
                gameProps:{
                  game: game
                }
              }}>
            <img src={game.background_image} width="1000" height="700" alt="game"/>
            <h1>{game.name}</h1>
            </Link>
          </ul>
        ))
      }
      </ul>
    </div>
  )
}

export default TopGames;