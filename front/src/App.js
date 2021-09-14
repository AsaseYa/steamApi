import {BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Player from './pages/Player';
import SteamOwnedGames from './pages/SteamOwnedGames';
import "./styles/index.scss";


function App() {
  return (
       <BrowserRouter>
          <Switch>
               <Route path="/" exact component={Home}></Route>
               <Route path="/about" exact component={About}></Route>
               <Route path="/steamOwnedGames" exact component={SteamOwnedGames}></Route>
               <Route path="/player" exact component={Player}></Route>
               <Route component={NotFound}></Route>
          </Switch>
       </BrowserRouter>

  );
}

export default App;
