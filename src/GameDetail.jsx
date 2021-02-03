import LoginNav from './LoginNav'
import GameTrailer from './GameTrailer'




const GameDetail = (props) => {

    const { game } = props.location.gameProps
  
    return (
      <div className="game-detail">
         <LoginNav />
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <h3>Genre:</h3>
          { 
            game.genres.map(g => `${g.name} / `)
          }
  
        <h3>Platform:</h3>
          { 
            game.platforms.map(p => `${p.platform.name} / `)
          }
  
        <ul className='game-photo'>
          {
            game.short_screenshots.map(ss => <ul><img src={ss.image} width="300" height="200" alt='screenshot'></img></ul>)
          }
        </ul>
        <div>
    
        </div>
      </div>
    );
  }
  
  export default GameDetail;
  
  