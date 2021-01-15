const GameDetail = (props) => {

    const { game } = props.location.gameProps
  
    return (
      <div>
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <h3>Genre(s):</h3>
          { 
            game.genres.map(g => `${g.name} | `)
          }
  
        <h3>Platform(s):</h3>
          { 
            game.platforms.map(p => `${p.platform.name} | `)
          }
  
        <ul>
          {
            game.short_screenshots.map(ss => <ul><img src={ss.image} width="200" height="100" alt='screenshot'></img></ul>)
          }
        </ul>
      </div>
    );
  }
  
  export default GameDetail;
  
  