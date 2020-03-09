import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './sections/blog.js'
import Coffee from './sections/coffee.js'
import Equipment from './sections/equipment.js'
import Pictures from './sections/pictures.js'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <header className="App-header">
                jack-enjoys-coffee
            </header>
          </div>
        </Route>
        <Route path="/coffee">
          <Coffee />
        </Route>
        <Route exact path="/pictures">
          <Pictures />
        </Route>
        <Route path="/equipment">
          <Equipment />
        </Route>
        <Route path="blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
