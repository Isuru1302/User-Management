import React from 'react';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Agents from "./pages/Agents";
import Manager from "./pages/Manager";
import TeamLeaders from "./pages/TeamLeaders";

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/Dashboard" component={Dashboard}  />
            <Route path="/Users" component={Users}  />
            <Route path="/Agents" component={Agents}  />
            <Route path="/Manager" component={Manager}  />
            <Route path="/TeamLeaders" component={TeamLeaders}  />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
