import React, {useContext} from 'react';
import {getDateString, getHourString} from '../../utils/DateUtils';

import {
	Container,
	Title,
	Periods,
	Period
} from './style';

import Context from '../../GlobalContext';

function Ticket({journey}){

	const {addJourney} = useContext(Context);

	const {date, periods} = journey;

	const renderPeriods = periods.map((period, key)=> (
		<Period key={key}>
			<span>{ getHourString(period[0]) }</span>
			<span>{ getHourString(period[1]) }</span>
		</Period>
	));

	return (
		<Container display={ journey ? "flex" : "flex" }>
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
			<button
				onClick={ () => addJourney() }>
				Arquivar
			</button>
		</Container>
	);
}

export { Ticket };