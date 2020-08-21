import React, {useEffect} from 'react';

import {Container} from './style';

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
			<h1>{ time.toLocaleString() }</h1>
		</Container>
	);
}

export {Watch};