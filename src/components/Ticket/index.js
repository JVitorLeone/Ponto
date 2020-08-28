import React from 'react';

import {Container} from './style';

function Ticket({journey}){
	return (
		<Container>
			<h1>{journey && journey[0][0].toLocaleString()}</h1>
			<h1>{journey && journey[0][1].toLocaleString()}</h1>
		</Container>
	);
}

export { Ticket };