import React, {useState, useContext, useEffect} from 'react';
import {
	getDateString,
	getHourString,
	getTimeToHourString
} from '../../utils/DateUtils';

import {
	Wrapper,
	Container,
	Title,
	Periods,
	Period,
	Button
} from './style';

import Context from '../../GlobalContext';

function Ticket({journey}){

	const {addJourney} = useContext(Context);
	const {date, periods} = journey;
	const [print, setPrint] = useState(false);
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		setPrint(date !== undefined);

		return function opacity() {
			setOpacity(date ? 1 : 0);
		}
	},[journey]);

	const renderPeriods = periods && periods.map((period, key)=> (
		<Period key={key}>
			<span>{ getHourString(period[0]) }</span>
			<span>{ getHourString(period[1]) }</span>
		</Period>
	));

	const totalTime = () => {
		var total = 0;
		for (var period of periods){
			total += period[1].getTime() - period[0].getTime();
		}
		return total;
	};

	const saveTicket = () => {
		setPrint(false);
		addJourney();
	}

	return (
		<Wrapper>
			{ print && (
				<Container opacity={ opacity }>
					<Title>Registro de Horas</Title>
					<p>Data: { getDateString(date) }</p>
					<Periods>
						<span>Periodos({periods.length}): </span>
						<span>
							<Period>
								<span>Início</span>
								<span>Fim</span>
							</Period>
							{renderPeriods}
						</span>
					</Periods>
					<p>Total: { getTimeToHourString(totalTime()) }</p>
					<Button
						onClick={ () => saveTicket() }>
						Arquivar
					</Button>
				</Container>
			)}

		</Wrapper>
	);
}

export { Ticket };