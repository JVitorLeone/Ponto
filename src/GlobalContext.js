import React, {useState} from 'react';

const Context = React.createContext({
	setPeriod: () => {}
});

export function GlobalContext({ children }) {
	// const [journey, setJourney] = useState();
	const [period, setPeriod] = useState([]);

	return (
		<Context.Provider value={{ setPeriod }}>
			{ children }
		</Context.Provider>
	)
}

export default Context;