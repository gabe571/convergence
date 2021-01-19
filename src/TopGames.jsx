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
          <ul key={game.id}className="tgb">
            <Link to={{
                pathname: `/game/${game.name}`,
                gameProps:{
                  game: game
                }
              }}>
            <img src={game.background_image} width="700" height="500" alt="game"/>
            <h1 className="tgn">{game.name}</h1>
            </Link>
          </ul>
        ))
      }
      </ul>
    </div>
  )
}

export default TopGames;