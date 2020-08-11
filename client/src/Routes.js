import React, {Component} from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from './Components/Home';
import CheckIn from './Components/CheckIn';
import CheckOut from './Components/CheckOut';
import NavBar from "./Components/NavBar";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkin" component={CheckIn} />
          <Route exact path="/checkout" component={CheckOut} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;