import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import useLoginToken from './customHooks/useLoginToken';

function App({history}) {
  const {token, setToken} = useLoginToken();

  if(!token) {
    return <Login setToken={setToken} history={history} />
  }
  return(
    <>
      <Router history={history}>
        <Switch>
            <Route path="/login">
              <Login setToken={setToken} history={history}/>
            </Route>
            <Route path="/home">
              <Home history={history}></Home>
            </Route>
            <Route path="/">
            <Login setToken={setToken} history={history}/>
            </Route>
          </Switch>
      </Router>
    </>
  )
}

export default App;
