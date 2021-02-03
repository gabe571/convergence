import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MustPlayGames from "./MustPlayGames";
import Search from "./Search";
import Nav from "./Nav";
import Login from "./Login"
import SignUp from "./SignUp"
import Home from './Home'
import GameDetail from "./GameDetail";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path='/' component={Home}/>
          <Route path='/Login' component={Login}/>
          <Route path='/SignUp' component={SignUp}/>
          <Route path='/game/:name' component={GameDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
