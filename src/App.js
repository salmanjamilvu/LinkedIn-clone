import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Container/loginContainer'
import Home from './Container/homeContainer'
import H_Header from './Container/headerContainer'

function App(props) {

  useEffect(() => {
    console.log(props.getUserAuth())
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' >
            <Login/>
          </Route>
          <Route exact path='/home' >
            <H_Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
