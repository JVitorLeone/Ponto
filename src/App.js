import React from 'react';

import {GlobalContext} from './GlobalContext';
import {GlobalStyles} from './style/GlobalStyles';

import {Ponto} from './components/Ponto';
import {Ampulheta} from './components/Ampulheta';

function App() {
  return (
	<GlobalContext>
		<Ponto />

		{/* <Ampulheta/> */}

		<GlobalStyles />
	</GlobalContext>
  );
}

export default App;
