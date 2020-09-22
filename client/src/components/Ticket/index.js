import React, {useState, useContext} from 'react';
import {
	getDateString,
	getHourString,
	getTimeToHourString
} from '../../utils/DateUtils';

import {
	Wrapper,
	Container, Printer,
	Title, Periods,
	Period, Button
} from './style';

import Context from '../../GlobalContext';

function Ticket(props){

	const {currentJourney} = useContext(Context);
	const {closeJourney} = props;
	const {date, periods} = currentJourney;
	const [opacity, setOpacity] = useState(1);

	const renderPeriods = periods && periods.map((period, key)=> (
		<Period key={key}>
			<span>{ getHourString(period.start) }</span>
			<span>{ getHourString(period.finish) }</span>
		</Period>
	));

	const totalTime = () => {
		var total = 0;
		for (var period of periods){
			total += period.finish - period.start;
		}
		return total;
	};

	var height = periods ? ( 182 + periods.length * 17 ) : 0;

	return (
		<Printer title="Retire seu comprovante aqui">
			<Wrapper height={ height + "px" }>
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
						onClick={ () => closeJourney() }>
						Arquivar
					</Button>
				</Container>
			</Wrapper>
		</Printer>
	);
}

export { Ticket };