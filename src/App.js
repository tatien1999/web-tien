import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Agree from "./todo/Agree"
import User from "./todo/User"
import CreateAcc from "./todo/CreateAcc"
import UpdateAcc from "./todo/UpdateAcc"




export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/agreeterm">Agree Term</Link>
          </li>
          <li>
            <Link to="/ceacc">Create and edit acc</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact>
          </Route>
          <Route path="/agreeterm" component={Agree}/>  
          <Route path="/ceacc" component={User}/>
          <Route path="/CreateAcc" component={CreateAcc}/>
          <Route path="/UpdateAcc" component={UpdateAcc}/>
        </Switch>
      </div>
    </Router>
  );
}