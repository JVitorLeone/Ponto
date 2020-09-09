export const localManager = () => {

	const getJourneys = () => {
		let journeys = JSON.parse(
			localStorage.getItem('@ponto/journeys')
		);
		return journeys || [];
	};

	const setJourneys = journeys => {
		journeys = JSON.stringify(journeys);
		localStorage.setItem("@ponto/journeys", journeys);
	};

	const addJourney = journey => {
		var journeys = getJourneys();
		journeys.push(journey);
		setJourneys(journeys);
	};

	return { getJourneys, setJourneys, addJourney }
};