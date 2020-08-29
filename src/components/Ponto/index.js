import React, {useState, useContext} from 'react';

import {
	Container,
	PontoBox,
	Actions,
	Printer
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

	const [limit, setLimit] = useState(5000000);

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

		setCurrent(periods);
		setPeriods([]);
		setActive(false);
	};

	return (
		<Container>
			<PontoBox>
				<Actions>
					<Watch
						time={ currentTime }
						setTime={(t) => setCurrentTime(t)}
					/>

					<Limit
						setLimit={(l) => setLimit(l)}
						limit={ limit }
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
					<Printer />
				</Actions>
				<Ticket
					journey={ getCurrent() }
				/>
			</PontoBox>
		</Container>
	);
}

export { Ponto };
