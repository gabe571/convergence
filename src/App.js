import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MustPlayGames from "./MustPlayGames";
import Search from "./Search";
import Nav from "./Nav";
import Login from "./Login"
import SignUp from "./SignUp"
import Home from './Home'
import GameDetail from "./GameDetail";
import GameTrailer from './GameTrailer'
import Review from './Review'
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path='/Home' component={Home}/>
          <Route path='/Login' component={Login}/>
          <Route path='/SignUp' component={SignUp}/>
          <Route path='/Reviews' component={ReviewsContainer} />
          <Route path='/game/:name' component={GameDetail} />
          {/* <Route path='/ReviewForm' render={this.renderForm}/> */}
          <Route path='/GameTrailer' component={GameTrailer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
