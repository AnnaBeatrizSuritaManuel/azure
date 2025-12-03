import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Curriculum1 from './Curriculum1';
import Curriculum2 from './Curriculum2';
import './index.css';

function App() {
  return (
    <div className="app">
      <Router>

        <header className="app-header">
          <h1>Currículos</h1>
        </header>

        <nav className="navbar">
          <ul>
            <li><Link to="/curriculum1">Currículo 1</Link></li>
            <li><Link to="/curriculum2">Currículo 2</Link></li>
          </ul>
        </nav>

        <div className="curriculum-container">
          <Switch>
            <Route path="/curriculum1" component={Curriculum1} />
            <Route path="/curriculum2" component={Curriculum2} />
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
