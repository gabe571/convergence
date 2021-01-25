import React from 'react'
import TopGames from './TopGames'
import Search from './Search'

class Home extends React.Component {


    render() {
        return(
            <div>
                <TopGames />
                <Search />
            </div>
        )
    }
}

export default Home