import React, {useState} from 'react';



const Context = React.createContext({
	setPeriod: () => {}
});

export function GlobalContext({ children }) {

	const [currentJourney, setCurrenJourney] = useState({});

	const getCurrent = () => currentJourney;

	const setCurrent = (p) => {
		var newJourney = {
			date: new Date(),
			periods: p
		};

		setCurrenJourney(newJourney);
	};

	const [journeys, setJourneys] = useState([currentJourney]);

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