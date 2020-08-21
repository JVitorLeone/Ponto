import React from 'react';

const Context = React.createContext();

function GlobalContext({ children }) {
	return (
		<Context.Provider value={""}>
			{ children }
		</Context.Provider>
	)
}

export { GlobalContext }