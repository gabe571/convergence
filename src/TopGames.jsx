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
            <h3>{game.name}</h3>
            <img src={game.background_image} width="200" height="100" alt="game"/>
            </Link>
          </ul>
        ))
      }
      </ul>
    </div>
  )
}

export default TopGames;