import React from 'react';
import './landing.css';
import './responsive-styles.css'
import Home from './landing-home'
import Live from './live'
import Submit from './submit'
import Notfound from './notfound'
import HomePage from './src/Homepage/Home.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const App = () => {
  return(
    
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/live" component={Live}/>
        <Route path="/login" component={HomePage}/>
        <Route exact path="/submit" component={Submit}/>
        <Route component={Notfound}/>
        </Switch>
      </Router>
  )
}

export default App
