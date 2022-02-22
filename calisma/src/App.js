import React, { Component } from "react";
import "./App.css";
import NavigasyonBar from "./component/NavigasyonBar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import GenelTanitim from "./component/GenelTanitim";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <NavigasyonBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/GenelTanitim/:Id">
                <GenelTanitim />
              </Route>
            </Switch>
            <Footer />
          </div>
      </Router>
    );
  }
}
export default App;
