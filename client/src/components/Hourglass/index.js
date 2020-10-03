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
	const [openTime, setOpenTime] = useState(0);
	const [closedTime, setClosedTime] = useState(0);
	const [durations, setDurations] = useState([]);
	const totalTime = closedTime + openTime;
	const remainingTime = totalTime < limit ? (
		limit - totalTime
	) : 0;

	useEffect(() => {
		function openPeriodHours() {
			let start = periods.slice(-1)[0].start;
			let end = currentTime;
			return Math.round(end - start);
		}

		function updateTime() {
			if (isActive) {
				setOpenTime(
					Math.round(openPeriodHours())
				);
			}
		}

		updateTime();
	},[currentTime]);

	useEffect(() => {
		function closedPeriodHours(period) {
			let start = period.start;
			let end = period.finish;
			return Math.round(end - start);
		}

		let last = periods.slice(-1)[0];

		if (last !== undefined) {
			if (last.finish !== null) {
				setDurations([
					...durations,
					closedPeriodHours(last)
				]);
			}
		} else {
			setOpenTime(0);
			setClosedTime(0);
		}
	},[periods]);

	useEffect(() => {
		setOpenTime(0);
	},[closedTime]);

	useEffect(() => {
		if (durations.length) {
			let sum = closedTime + durations.slice(-1)[0];
			setClosedTime(sum);
		}
	},[durations]);

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