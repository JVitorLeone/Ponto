import React, {useEffect, useState} from 'react';

const Context = React.createContext({
	setPeriod: () => {}
});

const initJourney = {
	upToDate: true,
	user_id: undefined,
	id: undefined,
	date: undefined,
	periods: []
};

export function GlobalContext({ children }) {

	// TODO 
	// Fazer login c/ google
	const [userId, setUserId] = useState(1001);

	const [currentJourney, setCurrenJourney] = useState(initJourney);
	const [journeys, setJourneys] = useState([]);

	useEffect(() => {

		const remoteJourneyUpdate = async(journey) => {
			const options = {
				method: "POST",
				headers: new Headers({'content-type': 'application/json'}),
				body: JSON.stringify(journey)
			};

			console.log(
				journey
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
					setCurrenJourney({
						...data,
						upToDate: true
					});
				}
			} catch(error)  {
				console.log("Erro: " + error);
			}
		}
			
		if (!currentJourney.upToDate) 
			remoteJourneyUpdate(currentJourney);

		if (currentJourney.finished) {
			setJourneys([
				...journeys,
				currentJourney.id
			]);
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

	return (
		<Context.Provider
			value={{ currentJourney, setJourney }}>
			{ children }
		</Context.Provider>
	)
}

export default Context;