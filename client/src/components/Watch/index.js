import React, {useEffect} from 'react';
import {getDateString, getHourString} from '../../utils/DateUtils';

import {Container, Row} from './style';

const refreshDelay = 60 * 1000;

function Watch({ time, setTime }) {

	function tick() {
		let current = new Date();
		if (time !== current) setTime(current);
	};

	useEffect(() => {
		setInterval(tick, 1000);
	},[]);

	return (
		<Container>
			<Row desc="Dia">{ getDateString(time) }</Row>
			<Row desc="Hora">{ getHourString(time) }</Row>
		</Container>
	);
}

export {Watch};