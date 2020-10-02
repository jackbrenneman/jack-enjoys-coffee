import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import TopNav from './nav/topnav.js'
import Home from './sections/home.js'
import Blog from './sections/blog.js'
import Coffee from './sections/coffee.js'
import Equipment from './sections/equipment.js'
import Pictures from './sections/pictures.js'
import './App.scss'

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <TopNav history={history} />
      <div className="App">
        <Switch>
          <Route exact path="/coffee">
            <Coffee />
          </Route>
          <Route exact path="/pictures">
            <Pictures />
          </Route>
          <Route exact path="/equipment">
            <Equipment />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
