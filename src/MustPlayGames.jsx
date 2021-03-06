import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const MustPlayGames = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/games')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }
  console.log(games)

  return (
    <div className="mpg">
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
            {/* <a className="buy"href={game.name} target="_blank">buy</a> */}
          </ul>
        ))
      }
      </ul>
    </div>
  )
}

export default MustPlayGames;