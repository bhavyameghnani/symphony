import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import CreateActivity from "./screens/CreateActivity";
import LoginPage from "./screens/LoginPage";
import PostActivity from "./screens/PostActivity";
import Scorecards from "./screens/Scorecards";
import Untitled from "./screens/Untitled";
import UserDetails from "./screens/UserDetails";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={CreateActivity} />
      <Route path="/CreateActivity/" exact component={CreateActivity} />
      <Route path="/LoginPage/" exact component={LoginPage} />
      <Route path="/PostActivity/" exact component={PostActivity} />
      <Route path="/Scorecards/" exact component={Scorecards} />
      <Route path="/Untitled/" exact component={Untitled} />
      <Route path="/UserDetails/" exact component={UserDetails} />
    </Router>
  );
}

export default App;