import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route, 
} from 'react-router-dom';

import {GlobalContext} from './GlobalContext';
import {GlobalStyles, Container, Wrapper} from './style/GlobalStyles';

import {Ponto} from './components/Ponto';
import {Home} from './components/Home';

function App() {
	return (
		<GlobalContext>
			<Container>
				<Wrapper>
					<BrowserRouter>

						<Switch>
							<Route path="/" exact={true} render={ () => {
								return <Home/>; 
							}}/>
							<Route path="/ponto" exact={true} render={ () => {
								return <Ponto/>; 
							}}/>
						</Switch>

						<GlobalStyles/>
					</ BrowserRouter>
				</Wrapper>
			</Container>
		</GlobalContext>
	);
}

export default App;
