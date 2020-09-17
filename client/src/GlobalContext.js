import React, {useEffect, useState} from 'react';
import {Journey} from './models';
import {localManager} from './services/local';

const Context = React.createContext({
	setPeriod: () => {}
});

export function GlobalContext({ children }) {
	// const localStorage = localManager();

	const [userId, setUserId] = useState(1001);

	const [currentJourney, setCurrenJourney] = useState();

	useEffect(() => {
		if (currentJourney) requestPeriodUpdate(currentJourney);
	},[currentJourney]);

	const getCurrent = () => currentJourney;

	const setCurrent = (p) => {
		if( !currentJourney ) {
			var date = new Date();
		} else {
			var date = currentJourney.date;
		}

		var newJourney = Journey(date, p);
		setCurrenJourney(newJourney);
	};

	const [journeys, setJourneys] = useState([]);

	const addJourney = () => {
		localStorage.addJourney(currentJourney);

		setJourneys([
			...journeys,
			currentJourney
		]);
	};

	const requestPeriodUpdate = async(journey) => {
		const options = {
			method: "POST",
			headers: new Headers({'content-type': 'application/json'}),
			body: JSON.stringify(journey)
		};

		console.log(
			JSON.stringify(journey)
		);
		try {
			let response = await fetch('http://localhost:5000/journey', options);
			let data = await response.json();
			// let data = response;

			if (data.erro) {
				// Alerta de erro
				console.log("Erro: " + data.erro);
			} else {
				console.log(data);
			}
		} catch(error)  {
			console.log("Erro: " + error);
		}
	}
	return (
		<Context.Provider
			value={{ getCurrent, setCurrent, addJourney }}>
			{ children }
		</Context.Provider>
	)
}

export default Context;