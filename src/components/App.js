import './App.css';
import Watchlist from './Watchlist'
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Browse from './Browse';

function App({ props }) {
	return (
	<div className="App">
		<h1>Navbar Place Holder</h1>
    
    <Switch>
      <Route
					path='/' exact={true}
					render={(routerProps) => <Browse {...routerProps}  />}
          />
      <Route
					path='/watchlist' exact={true}
					render={(routerProps) => <Watchlist {...routerProps} user='Gore' />}
          />
      </Switch>
	</div>
	);
}

export default App;