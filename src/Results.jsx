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
                        <h3>{game.name}</h3>
                        <img src ={game.background_image} alt='game'/>
                        </Link>
                    </ul>
                ))
                }
            </ul>
        </div>
    );
}

export default Results;