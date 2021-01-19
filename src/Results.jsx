import React from 'react';
import { Link } from 'react-router-dom'

const Results = (props) => {
    return (
        <div className="results=container">
            <ul>
                { 
                props.gameResults.map(game => (
                    <ul key={game.id}>
                        <Link to={{
                            pathname: `/game/${game.name}`,
                            gameProps:{
                                game: game
                            }
                        }}>
                        <img src ={game.background_image} width="700" height="500" alt='game'/>
                        <h1 className="rn">{game.name}</h1>
                        </Link>
                    </ul>
                ))
                }
            </ul>
        </div>
    );
}

export default Results;