import React, {useState, useContext} from 'react';
import {Period} from '../../models';

import {
	Container,
	PontoBox,
	Row
} from './style';

import Context from '../../GlobalContext';
import {Watch} from '../Watch';
import {ButtonTray} from '../ButtonTray';
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

	var finishedJourney = getCurrent();

	return (
		<Container>
			<PontoBox>
				<Row>
					<Watch
						time={ currentTime }
						setTime={(t) => setCurrentTime(t)}
					/>
					{ (finishedJourney !== {}) && (
						<Ticket
							journey={ getCurrent() }
						/>
					)}

				</Row>

				<Hourglass
					isActive={ active }
					currentTime={ currentTime }
					limit = { limit }
					periods={ periods }
				/>

				<ButtonTray
					canStart={ limit !== 0 }
					canFinish={ !!periods.length }
					isActive={ active }
					start={ () => startPeriod() }
					stop={ () => stopPeriod() }
					finish={ () => finishPeriod() }
					setLimit={(l) => setLimit(l)}
					limit={ limit }
				/>

			</PontoBox>
		</Container>
	);
}

export { Ponto };
