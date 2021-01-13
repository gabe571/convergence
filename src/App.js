import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopGames from './TopGames';
import Search from '.Nav';
import Nav from "./Nav";
import GameDetail from "./GameDetail";


export default function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path='/topgames' component={TopGames} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/game/:name' component={GameDetail} />
        </Switch>
      </div>
    </Router>
  )
}