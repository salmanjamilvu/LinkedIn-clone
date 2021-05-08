import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import H_Header from './components/H_Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' >
            <Login/>
          </Route>
          <Route exact path='/home' >
            <H_Header/>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
