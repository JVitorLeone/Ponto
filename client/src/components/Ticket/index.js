import React, {useState, useContext, useEffect} from 'react';
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
			<span>{ getHourString(period.start) }</span>
			<span>{ getHourString(period.finish) }</span>
		</Period>
	));

	const totalTime = () => {
		var total = 0;
		for (var period of periods){
			total += period.finish.getTime() - period.start.getTime();
		}
		return total;
	};

	const saveTicket = () => {
		setPrint(false);
		addJourney();
	}

	var height = periods ? ( 182 + periods.length * 17 ) : 0;

	return (
		<>
			{ print && (
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
								onClick={ () => saveTicket() }>
								Arquivar
							</Button>
						</Container>
					</Wrapper>
				</Printer>
			)}
		</>
	);
}

export { Ticket };