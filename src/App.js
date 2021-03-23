import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
      </div>
        <PrivateRoute exact path="/bubble-page" component={BubblePage} />
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute