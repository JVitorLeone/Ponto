import React, {useState, useContext, useEffect} from 'react';

import {
	Container,
	PontoBox
} from './style';

import Context from '../../GlobalContext';
import {Watch} from '../Watch';
import {ButtonTray} from '../ButtonTray';
import {Hourglass} from '../Hourglass';
import {Ticket} from '../Ticket';

function Ponto(){
	const {currentJourney, setJourney, addJourney} = useContext(Context);
	var periods = currentJourney? currentJourney.periods : [];

	const [currentTime, setCurrentTime] = useState(new Date().getTime());

	const [limit, setLimit] = useState(31680500);

	const [printTicket, setPrintTicket] = useState(false);
	const [printPonto, setPrintPonto] = useState(true);
	const [slideUp, setSlideUp] = useState(false);

	const [active, setActive] = useState(false);

	const stopPeriod = () => {
		var snapShot = periods.slice();
		var currentPeriod = snapShot.slice(-1)[0];
		currentPeriod.finish = currentTime;

		setActive(false);
		setJourney({
			periods: snapShot
		});
	};

	const startPeriod = () => {
		setActive(true);
		setJourney({
			periods: [
				...periods,
				{
					start: currentTime,
					finish: null
				}
			]
		});	
	};

	const finishPeriod = () => {
		var currentPeriod = periods.slice(-1)[0];

		if (currentPeriod.finish == null) stopPeriod();

		setSlideUp(true);
		setTimeout(() => setPrintTicket(true), 1850);
		setTimeout(() => setPrintPonto(false), 2500);
	};

	const closeJourney = () => {
		addJourney(currentJourney);
		setPrintTicket(false);
		setSlideUp(false);
		setPrintPonto(true);
	}

	return (
		<Container>
			{ printPonto && (
				<PontoBox  className={ slideUp ? 'slide' : '' }>
				<Watch
					time={ currentTime }
					setTime={ (t) => setCurrentTime(t) }
				/>
	
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
					setLimit={ (l) => setLimit(l) }
					limit={ limit }
				/>
			</PontoBox>
			)}
			{ printTicket && (
				<Ticket
					closeJourney={ () => closeJourney() }
				/>
			)}
		</Container>
	);
}

export { Ponto };
