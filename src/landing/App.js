import React from 'react';
import './App.css';
import './responsive-styles.css'
import Home from './landing-home'
import Live from './live'
import Login from './login'
import Submit from './submit'
import Notfound from './notfound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const App = () => {
  return(
    
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/live" component={Live}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/submit" component={Submit}/>
        <Route component={Notfound}/>
        </Switch>
      </Router>
  )
}

export default App
