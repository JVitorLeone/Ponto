import React, {useState, useEffect} from 'react';
import {getTimeToHourString, getHourString} from '../../utils/DateUtils'

import {
	Container,
	Timer,
	Period, 
	Counter, 
	Time, 
	Periods
} from './style';

import {ChevronUpIcon, ChevronDownIcon} from '../../icons';

function Hourglass(props){

	const {isActive, currentTime, periods, limit} = props;
	const [totalTime, setTotalTime] = useState(calculateDuration(periods));

	const remainingTime = totalTime < limit ? (
		limit - totalTime
	) : 0;

	function calculateDuration(periods) {
		let sum = 0;

		if (periods.length > 0) {
			sum = sumClosedPeriods(periods);	

			let lastPeriod = periods.slice(-1)[0];

			if (lastPeriod.finish == null) 
				sum += (currentTime - lastPeriod.start);
		}

		return sum;
	}

	function sumClosedPeriods(periods) {
		let sum = 0;
		for (var period of periods) {
			if (period.finish !== null)
				sum += period.finish - period.start;
		}
		return sum;
	}

	useEffect(() => {
		function updateTime() {
			if (isActive) {
				setTotalTime(
					calculateDuration(periods)
				);
			}
		}

		updateTime();
	},[currentTime, periods]);

	const [showPeriods, setShowPeriods] = useState(false);
	let counter = 0;
	const renderPeriods = periods.map((period, key) => {
		var finish = period.finish !== null ? 
			getHourString(period.finish)
			: "--:--:--"
		;
		counter++;
		return (
			<Period key={key}>
				<Counter>{counter}</Counter>
				<Time>
					<span>{getHourString(period.start)}</span>
					<span>{finish}</span>
				</Time>
			</Period>
		);
	});

	return (
		<Container>
			{ periods.length > 0 && (
				<>
					<Timer bg='green'>
						<p>horas trabalhadas</p>
						{ getTimeToHourString(totalTime) }
					</Timer>

					<Timer bg='orange'>
						<p>horas restantes</p>
						{ getTimeToHourString(remainingTime) }
					</Timer>
				</>
			)}
			{ renderPeriods.length > 0 && (
				<Periods>
					<p
						onClick={ () => setShowPeriods(!showPeriods)}
					>
						Intervalos
						{ showPeriods ? (
							<ChevronUpIcon width="16px"/>
						) : (
							<ChevronDownIcon width="16px"/>
						) }
					</p>
					{ showPeriods && renderPeriods }
				</Periods>
			)}
		</Container>
	)
}

export { Hourglass };