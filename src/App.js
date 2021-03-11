import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TeamTrackerDetails from './Components/TeamTrackerDetails/TeamTrackerDetails';
import NotMatch from './Components/NotMatch/NotMatch';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home ></Home>
          </Route>
          <Route path="/teamDetails/:idTeam">
            <TeamTrackerDetails></TeamTrackerDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
