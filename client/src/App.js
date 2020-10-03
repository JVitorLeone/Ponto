import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

import {GlobalContext} from './GlobalContext';
import {GlobalStyles} from './style/GlobalStyles';

import {Ponto} from './components/Ponto';

function App() {
  return (
	<GlobalContext>
		<BrowserRouter>
			<Switch>
				<Route path="/ponto" exact={true} component={ Ponto } />
			</Switch>
			<GlobalStyles/>
		</ BrowserRouter>
	</GlobalContext>
  );
}

export default App;
