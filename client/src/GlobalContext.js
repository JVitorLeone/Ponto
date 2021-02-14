import React, {useEffect, useState} from 'react';

import {useAPI} from './services/API';

const Context = React.createContext();

const initJourney = {
	upToDate: true,
	user_id: undefined,
	id: undefined,
	date: undefined,
	periods: []
};

export function GlobalContext({ children }) {

	// TODO 
	// Criar API.js (updateJourney, getJourneys)
	const API = useAPI();

	const [userId, setUserId] = useState(1001);

	const [currentJourney, setCurrenJourney] = useState(initJourney);
	const [journeys, setJourneys] = useState([]);

	useEffect(() => {
		async function updateJourney(journey) {
			let response = await API.updateJourney(journey);

			if (!response.erro) {
				setCurrenJourney({
					...response,
					upToDate: true
				});
			}
		}
		if (!currentJourney.upToDate) {
			updateJourney(currentJourney);
		}

		if (currentJourney.finished) {
			setCurrenJourney(initJourney);
		}

	},[currentJourney, journeys]);

	const setJourney = (journey) => {
		setCurrenJourney({
			upToDate: false,
			user_id: userId,
			finished: journey.finished || false,
			date: journey.date || new Date().getTime(),
			id: journey.id || currentJourney.id,
			periods: journey.periods || []
		});
	};

	const updateJourneys = async () => {
		let response = await API.getJourneys(userId);
		if (!response.erro) {
		 	setJourneys(response);
		}
	}
	useEffect(() => {
		updateJourneys();
	},[]);

	const getJourneys = (start, finish) => {
		let copy = JSON.parse(JSON.stringify(journeys))
		return copy.slice(start, finish);
	}

	return (
		<Context.Provider
			value={{ currentJourney, setJourney, getJourneys, journeys, updateJourneys, userId }}>
			{ children }
		</Context.Provider>
	)
}

export default Context;