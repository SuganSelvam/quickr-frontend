import React, { useState } from 'react';
import { BrowserRouter as Router,	Redirect,	Route,	Switch,} from 'react-router-dom'
import './App.css';

import Login from "./Components/Login/Login"
import Register from "./Components/Login/Register"

import Dashboard from "./Components/Dashboard/Dashboard"
import PostAdvt from "./Components/PostAdv/PostAdvt"



function App() {

  const [User, setUser] = useState(null)
  const [IsLoggedIn , setIsLoggedIn] = useState(false)

  return (
    <Router>
				<Switch>          
					<Route path="/login" component={() => <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
					<Route path="/register" component={Register} />
          <Route path="/dashboard" component={() => <Dashboard User={User} IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} /> } />
          <Route path="/postadvt" component={() => <PostAdvt User={User} />} />
          <Redirect from="/" to="/dashboard" />
				</Switch>
			</Router>
  );
}

export default App;
