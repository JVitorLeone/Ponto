import React, {useState, useEffect} from 'react';

import {
	Container,
	PontoBox
} from './style';

import {ButtonTray} from '../ButtonTray';
import {Watch} from '../Watch';

function Ponto(){
	const [time, setTime] = useState(new Date());

	const [periods, setPeriods] = useState([]);
	const [active, setActive] = useState(false);

	const stopJourney = () => {
		var snapShot = periods;
		var currentPeriod = snapShot.pop();

		currentPeriod[1] = time;
		snapShot.push(currentPeriod);

		setPeriods(snapShot);
		setActive(false);
	};

	const startJourney = () => {
		setPeriods([
			...periods,
			[time, null]
		]);
		setActive(true);
	}

	return (
		<Container>
			<PontoBox>
				<Watch
					time={ time }
					setTime={(t) => setTime(t)}
				/>

				<ButtonTray
					isActive={ active }
					start={ () => startJourney() }
					stop={ () => stopJourney() }
				/>
			</PontoBox>
		</Container>
	);
}

export { Ponto };
