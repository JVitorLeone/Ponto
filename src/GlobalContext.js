import React, {useState} from 'react';
import {Journey} from './models';

const Context = React.createContext({
	setPeriod: () => {}
});

export function GlobalContext({ children }) {

	const [currentJourney, setCurrenJourney] = useState({});

	const getCurrent = () => currentJourney;

	const setCurrent = (p) => {
		var newJourney = Journey(new Date(), p);
		setCurrenJourney(newJourney);
	};

	const [journeys, setJourneys] = useState([]);

	const addJourney = () => {
		setJourneys([
			...journeys,
			currentJourney
		]);
	};

	return (
		<Context.Provider
			value={{ getCurrent, setCurrent, addJourney }}>
			{ children }
		</Context.Provider>
	)
}

export default Context;