import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route, 
	useHistory
} from 'react-router-dom';

import {GlobalContext} from './GlobalContext';
import {GlobalStyles, Container, Wrapper} from './style/GlobalStyles';

import {Ponto} from './components/Ponto';
import {Journeys} from './components/Journeys';
import {Navigator} from './components/Navigator';

function App() {
	return (
		<GlobalContext>
			<Container>
				<Wrapper>
					<BrowserRouter>

						<Switch>
							<Route path="/ponto" exact={true} render={ () => {
								return ComponentWithNavigator(<Ponto/>); 
							}}/>
							<Route path="/journeys" exact={true} render={ () => {
								return ComponentWithNavigator(<Journeys/>); 
							}}/>
						</Switch>

						<GlobalStyles/>
					</ BrowserRouter>
				</Wrapper>
			</Container>
		</GlobalContext>
	);
}

function ComponentWithNavigator(component) {
	return (
		<>
			<Navigator/>
			{component}
		</>
	);
}

export default App;
