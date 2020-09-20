import React, {useState, useContext, useEffect} from 'react';

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
	const {currentJourney, setCurrent} = useContext(Context);
	var periods = currentJourney? currentJourney.periods : [];

	const [currentTime, setCurrentTime] = useState(new Date().getTime());

	const [limit, setLimit] = useState(31680500);

	const [printTicket, setPrintTicket] = useState(false);

	const [active, setActive] = useState(false);

	const stopPeriod = () => {
		var snapShot = periods.slice();
		var currentPeriod = snapShot.slice(-1)[0];
		currentPeriod.finish = currentTime;

		setActive(false);
		setCurrent({periods: snapShot});
	};

	const startPeriod = () => {
		setActive(true);
		setCurrent({periods: [
			...periods,
			{
				start: currentTime,
				finish: null
			}
		]});
	};

	const finishPeriod = () => {
		var currentPeriod = periods.slice(-1)[0];
		if (currentPeriod.finish == null) stopPeriod();

		setPrintTicket(true);
		setActive(false);
		// setCurrent({periods}); TODO "finalizar" a jornada

	};

	return (
		<Container>
			<PontoBox>
				<Row>
					<Watch
						time={ currentTime }
						setTime={(t) => setCurrentTime(t)}
					/>
					{ printTicket && (
						<Ticket
							journey={ currentJourney }
							close={ () => setPrintTicket(false) }
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
