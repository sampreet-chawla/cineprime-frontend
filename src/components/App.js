import './App.css';
import Watchlist from './Watchlist'
import React from 'react';
import { Route, Switch } from "react-router-dom";

const App = () => {


return (
  <div className='App'>
      <h1>Navbar Place Holder</h1>
      <Switch>
      <Route
					path='/watchlist'
					render={(routerProps) => <Watchlist {...routerProps} user='Gore' />}
          />
      </Switch>
    </div>
  );
}

export default App;