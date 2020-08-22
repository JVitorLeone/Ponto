import React, {useState, useContext} from 'react';

import {
	Container,
	PontoBox
} from './style';

import Context from '../../GlobalContext';
import {ButtonTray} from '../ButtonTray';
import {Watch} from '../Watch';
import {CurrentPeriod} from '../CurrentPeriod';

function Ponto(){
	const {setPeriod} = useContext(Context);

	const [time, setTime] = useState(new Date());

	const [periods, setPeriods] = useState([]);
	const [active, setActive] = useState(false);

	const stopPeriod = () => {
		var snapShot = periods;
		var currentPeriod = snapShot.pop();

		currentPeriod[1] = time;
		snapShot.push(currentPeriod);

		setPeriods(snapShot);
		setActive(false);
	};

	const startPeriod = () => {
		setPeriods([
			...periods,
			[time, null]
		]);
		setActive(true);
	};

	const finishPeriod = () => {
		setPeriod(periods);
	};

	return (
		<Container>
			<PontoBox>
				<Watch
					time={ time }
					setTime={(t) => setTime(t)}
				/>

				<ButtonTray
					isActive={ active }
					start={ () => startPeriod() }
					stop={ () => stopPeriod() }
					finish={ () => finishPeriod() }
				/>

				<CurrentPeriod />
			</PontoBox>
		</Container>
	);
}

export { Ponto };
