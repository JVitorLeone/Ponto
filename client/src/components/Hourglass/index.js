import React, {useState, useEffect} from 'react';
import {getTimeToHourString} from '../../utils/DateUtils'

import {
	Container,
	Total,
	Remaining
} from './style';

function Hourglass(props){

	const {isActive, currentTime, periods, limit} = props;
	const [openTime, setOpenTime] = useState(0);
	const [closedTime, setClosedTime] = useState(0);
	const [durations, setDurations] = useState([]);
	const totalTime = closedTime + openTime;
	const remainingTime = limit !== 0 ? limit - (closedTime + openTime) : 0;

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

	return (
		<Container>
			{ periods.length > 0 && (
				<>
					<Total>
						<p>horas trabalhadas</p>
						{ getTimeToHourString(totalTime) }
					</Total>

					<Remaining>
						<p>horas restantes</p>
						{ getTimeToHourString(remainingTime) }
					</Remaining>
				</>
			)}
		</Container>
	)
}

export { Hourglass };