import React, {useState, useContext} from 'react';

import {
	PontoBox, Wrapper
} from './style';

import {FolderIcon, ClockIcon} from '../../icons';

import Context from '../../GlobalContext';
import {Watch} from '../Watch';
import {ButtonTray} from '../ButtonTray';
import {Hourglass} from '../Hourglass';
import {Ticket} from '../Ticket';
import {Journeys} from '../Journeys';
import {Navigator} from '../Navigator';


function Ponto(){

	const {currentJourney, setJourney} = useContext(Context);
	let periods = currentJourney.periods, 
		initialActive = false;

	if (periods.length > 0) {
		let lastPeriod = periods.slice(-1)[0];
		initialActive = (lastPeriod.finish == null);
	} 

	const [currentTime, setCurrentTime] = useState(new Date().getTime());

	const [limit, setLimit] = useState(31680500);

	const [displayTicket, setDisplayTicket] = useState(false);
	const [displayPonto, setDisplayPonto] = useState(true);
	const [displayJourneys, setDisplayJourneys] = useState(false);
	const [slideUp, setSlideUp] = useState(false);

	const [active, setActive] = useState(initialActive);

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
		setTimeout(() => setDisplayTicket(true), 1850);
		setTimeout(() => setDisplayPonto(false), 2500);
	};

	const closeJourney = () => {
		setJourney({
			...currentJourney,
			finished: true
		});

		setDisplayTicket(false);
		setSlideUp(false);
		setDisplayPonto(true);
	}

	const Navigate = (displayPonto) => {
		setDisplayPonto(displayPonto);
		setDisplayJourneys(!displayPonto);
	}

	const NavigationItens = [
		{
			onClick: () => Navigate(true),
			title: 'Ponto',
			icon: ClockIcon
		},
		{
			onClick: () => Navigate(false),
			title: 'Jornadas',
			icon: FolderIcon
		}
	];

	return (
		<>
			{ displayPonto && (
				<Wrapper className={ slideUp ? 'slide' : '' }>
					<PontoBox>

						<Watch
							time={ currentTime }
							setTime={ (t) => setCurrentTime(t) } />
			
						<Hourglass
							isActive={ active }
							currentTime={ currentTime }
							limit = { limit }
							periods={ periods } />

						<ButtonTray
							canStart={ limit !== 0 }
							canFinish={ !!periods.length }
							isActive={ active }
							start={ () => startPeriod() }
							stop={ () => stopPeriod() }
							finish={ () => finishPeriod() }
							setLimit={ (l) => setLimit(l) }
							limit={ limit } />
		
					</PontoBox>
				</Wrapper>
			)}
			{ displayTicket && (
				<Ticket
					closeJourney={ () => closeJourney() } />
			)}		
			{ displayJourneys && (
				<Journeys />
			)}	
			<Navigator items={NavigationItens}/>		
		</>
	);
}

export { Ponto };
