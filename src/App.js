import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './Routes'
import Navbar from "./components/navbar.component";


export default () => {
  return (
    <Router>

      <div className="container">
      <Navbar/>
      <br />
      <Switch>
      {
        routes.map((route,i)=>(
          <Route key={i} {...route} />
        ))
      }
      </Switch>
      </div>
    </Router>
  );
}

