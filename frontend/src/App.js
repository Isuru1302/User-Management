import React ,{ Component }from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import {createBrowserHistory} from "history";
import './App.css';


import store from "./store";


import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Agents from "./pages/Agents";
import Manager from "./pages/Manager";
import TeamLeaders from "./pages/TeamLeaders";
import newUser from './pages/newUser';
import ImportExcel from './pages/importExcel';


function App() {
  return (

      <Provider store={store}>
          <BrowserRouter>
                 <Switch>
                     <Route path="/" component={Login} exact />
                     <Route path="/Dashboard" component={Dashboard}  />
                     <Route path="/Users" component={Users}  />
                     <Route path="/Agents" component={Agents}  />
                     <Route path="/Manager" component={Manager}  />
                     <Route path="/TeamLeaders" component={TeamLeaders}  />
                     <Route path="/newUser/:type" component={newUser}  />
                     <Route path="/ImportExcel" component={ImportExcel}  />
                 </Switch>
          </BrowserRouter>
      </Provider>

  );
}

export default App;
