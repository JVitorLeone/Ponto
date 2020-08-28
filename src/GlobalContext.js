import React, {useState} from 'react';

const Context = React.createContext({
	setPeriod: () => {}
});

export function GlobalContext({ children }) {
	const [journeys, setJourneys] = useState([]);

	const lastJourney = () => journeys.slice(-1)[0];

	const addJourney = (j) => {
		setJourneys([
			...journeys, j
		]);
	}

	return (
		<Context.Provider value={{ lastJourney, addJourney }}>
			{ children }
		</Context.Provider>
	)
}

export default Context;