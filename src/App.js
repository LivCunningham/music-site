import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'

import Bands from './pages/Bands'
import Artists from './pages/Artists'
import Collabs from './pages/Collabs'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Bands" exact component={Bands} />
            <Route path="/Artists" exact component={Artists} />
            <Route path="/Collabs" exact component={Collabs} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
