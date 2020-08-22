import React from 'react';

import {GlobalContext} from './GlobalContext';
import {GlobalStyles} from './style/GlobalStyles';

import {Ponto} from './components/Ponto';

function App() {
  return (
	<GlobalContext>
		<Ponto />

		<GlobalStyles />
	</GlobalContext>
  );
}

export default App;
