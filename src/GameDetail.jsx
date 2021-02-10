import LoginNav from './LoginNav'
import GameTrailer from './GameTrailer'
import ReviewsContainer from './ReviewsContainer'




const GameDetail = (props) => {

    const { game } = props.location.gameProps
  
    console.log(game)
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
        <ul className='game-preview'>
          <h4>Preview</h4>
          {
          // game.clips.map(g => {g.clip.clips})
          // console.log(game.clip.clips.full)
          }
        </ul>
        <div>
          <ReviewsContainer />
        </div>
      </div>
    );
  }
  
  export default GameDetail;
  
  