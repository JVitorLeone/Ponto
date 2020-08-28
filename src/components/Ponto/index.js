import React, {useState, useContext} from 'react';

import {
	Container,
	PontoBox
} from './style';

import Context from '../../GlobalContext';
import {Watch} from '../Watch';
import {ButtonTray} from '../ButtonTray';
import {Hourglass} from '../Hourglass';

function Ponto(){
	const {setPeriod} = useContext(Context);

	const [currentTime, setCurrentTime] = useState(new Date());

	const [periods, setPeriods] = useState([]);
	const [active, setActive] = useState(false);

	const stopPeriod = () => {
		var snapShot = [...periods];
		var currentPeriod = snapShot.slice(-1)[0];

		currentPeriod[1] = currentTime;
		snapShot.push(currentPeriod);

		setPeriods(snapShot);
		setActive(false);
	};

	const startPeriod = () => {
		setPeriods([
			...periods,
			[currentTime, null]
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
					time={ currentTime }
					setTime={(t) => setCurrentTime(t)}
				/>

				<ButtonTray
					isActive={ active }
					start={ () => startPeriod() }
					stop={ () => stopPeriod() }
					finish={ () => finishPeriod() }
				/>

				<Hourglass
					isActive={ active }
					currentTime={ currentTime }
					periods={ periods }
				/>
			</PontoBox>
		</Container>
	);
}

export { Ponto };
