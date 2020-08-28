import React, {useState, useEffect} from 'react';

import {
	Container,
	Elapsed,
	Remaining,
	Goal,
	GoalInput
} from './style';

function Hourglass(props){

	const { isActive, currentTime, periods } = props;

	useEffect(() => {
		if (isActive) {
			setOpenTime(Math.round(openPeriodHours()));
		}
	},[currentTime]);

	useEffect(() => {
		let last = periods.slice(-1)[0];

		if (last !== undefined) {
			if (last[1] !== null) {
				setDurations([
					...durations,
					closedPeriodHours(last)
				]);
			} else {

			}
		}
	},[periods]);

	const [openTime, setOpenTime] = useState(0);
	const [closedTime, setClosedTime] = useState(0);
	const [goal, setGoal] = useState(0);
	const [durations, setDurations] = useState([]);

	function closedPeriodHours(period) {
		return Math.round(period[1].getTime() - period[0].getTime());
	}

	function openPeriodHours() {
		return Math.round(currentTime.getTime() - periods.slice(-1)[0][0].getTime());
	}

	function getStringHour(duration) {
		var seconds = Math.floor((duration / 1000) % 60),
			minutes = Math.floor((duration / (1000 * 60)) % 60),
			hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		return hours + ":" + minutes + ":" + seconds;
	}

	function getTime(sHours) {
		sHours = sHours.split(":")
		var seconds = sHours[2] * 1000 || 0,
			minutes = sHours[1] * 1000 * 60,
			hours = sHours[0] * 1000 * 60 * 60;

		return Number(seconds + minutes + hours + 500);
	}

	function changeGoal(value){
		if (value){
			setGoal(getTime(value));
		} else {
			setGoal(0);
		}
	}

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
			<Goal>
				Duração do expediente:
				<GoalInput
					type="time"
					placeholder={ getStringHour(goal) }
					onChange={ ({target}) => changeGoal(target.value) }
				/>
			</Goal>

			<Elapsed>
				{ getStringHour(closedTime + openTime) }
			</Elapsed>
			<Remaining>
				{ getStringHour(goal - (closedTime + openTime)) }
			</Remaining>

		</Container>
	)
}

export { Hourglass };