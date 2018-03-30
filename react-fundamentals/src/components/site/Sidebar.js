import React from 'react';

import {
  Route,
  Link
} from 'react-router-dom'

import { routes } from './_routes';

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/jsxrules">JSX Rules</Link></li>
        <li><Link to="/classcomponent">Class Component</Link></li>
        <li><Link to="/propsdemo">Props Demo</Link></li>
        <li><Link to="/lifecyclecodepen">Life Cycles</Link></li>
        <li><Link to="/timer">Timers</Link></li>
        <li><Link to="/reactconceptlist">React Concepts Checklist</Link></li>
        <li><Link to="/nytapp">New York Times API App</Link></li>
        <li><Link to="/movie">Movie Search API App</Link></li>
        <li><Link to="/video">You Tube API App</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </div>
    <div className="sidebar-route">
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </div>
)

export default Sidebar;