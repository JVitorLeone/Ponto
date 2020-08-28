import React, {useState, useContext} from 'react';

import {
	Container,
	PontoBox
} from './style';

import Context from '../../GlobalContext';
import {Watch} from '../Watch';
import {ButtonTray} from '../ButtonTray';
import {Limit} from '../Limit';
import {Hourglass} from '../Hourglass';
import {Ticket} from '../Ticket';

function Ponto(){
	const {lastJourney, addJourney} = useContext(Context);

	const [currentTime, setCurrentTime] = useState(new Date());

	const [limit, setLimit] = useState(0);

	const [periods, setPeriods] = useState([]);

	const [active, setActive] = useState(false);

	const stopPeriod = () => {
		var snapShot = periods.slice();
		var currentPeriod = snapShot.slice(-1)[0];

		currentPeriod[1] = currentTime;

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

		addJourney(periods);
		setPeriods([]);
		setActive(false);
	};

	return (
		<Container>
			<PontoBox>
				<Watch
					time={ currentTime }
					setTime={(t) => setCurrentTime(t)}
				/>

				<ButtonTray
					canStart={ limit !== 0 }
					canFinish={ !!periods.length }
					isActive={ active }
					start={ () => startPeriod() }
					stop={ () => stopPeriod() }
					finish={ () => finishPeriod() }
				/>

				<Limit
					setLimit={(l) => setLimit(l)}
					limit={ limit }
				/>

				<Hourglass
					isActive={ active }
					currentTime={ currentTime }
					limit = { limit }
					periods={ periods }
				/>

				<Ticket
					journey={ lastJourney() }
				/>
			</PontoBox>
		</Container>
	);
}

export { Ponto };
