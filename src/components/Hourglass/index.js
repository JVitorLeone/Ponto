import React, {useState, useEffect} from 'react';
import {getStringHour} from '../../utils/DateUtils'

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
			return Math.round(currentTime.getTime() - periods.slice(-1)[0][0].getTime());
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
			return Math.round(period[1].getTime() - period[0].getTime());
		}

		let last = periods.slice(-1)[0];

		if (last !== undefined) {
			if (last[1] !== null) {
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

			<Total>
				<p>horas trabalhadas</p>
				{ getStringHour(totalTime) }
			</Total>

			<Remaining>
				<p>horas restantes</p>
				{ getStringHour(remainingTime) }
			</Remaining>

		</Container>
	)
}

export { Hourglass };