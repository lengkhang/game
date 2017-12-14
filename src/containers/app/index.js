import React from 'react';
import { Route } from 'react-router-dom'
import About from '../about'
import Game from '../game/game';
import Home from '../home';

const App = () => (
  <div>
    <main>
    <Route exact path="/" component={Home} />  
    <Route exact path="/play" component={Game} />
    <Route exact path="/help" component={About} />
    </main>
  </div>
)

export default App
