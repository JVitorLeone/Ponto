import React, {useState, useContext} from 'react';
import {Period} from '../../models';

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
	const {getCurrent, setCurrent} = useContext(Context);

	const [currentTime, setCurrentTime] = useState(new Date());

	const [limit, setLimit] = useState(31680500);

	const [periods, setPeriods] = useState([]);

	const [active, setActive] = useState(false);

	const stopPeriod = () => {
		var snapShot = periods.slice();
		var currentPeriod = snapShot.slice(-1)[0];

		currentPeriod.finish = currentTime;

		setPeriods(snapShot);
		setActive(false);
	};

	const startPeriod = () => {
		setPeriods([
			...periods,
			Period(currentTime, null)
		]);
		setActive(true);
	};

	const finishPeriod = () => {
		var currentPeriod = periods.slice(-1)[0];
		if (currentPeriod.finish == null) stopPeriod();

		setCurrent(periods);
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

				<Hourglass
					isActive={ active }
					currentTime={ currentTime }
					limit = { limit }
					periods={ periods }
				/>

				<Limit
					setLimit={(l) => setLimit(l)}
					limit={ limit }
				/>

				<Ticket
					journey={ getCurrent() }
				/>

			</PontoBox>
		</Container>
	);
}

export { Ponto };
