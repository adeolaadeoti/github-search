import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './routes/Home/Home';
import './App.scss';


function App() {

  return (
    <>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </>
  );
}

export default App;