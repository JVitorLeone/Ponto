import React from 'react';

import {Container, Button} from './style.js';

function ButtonTray(props) {
	const { start, stop, isActive } = props;

	return (
		<Container>
			<Button
				onClick={ () => stop() }
				disabled={ !isActive } >
			Parar
			</Button>
			<Button
				onClick={ () => start() }
				disabled={ isActive } >
			Começar
			</Button>
		</Container>
	);
}

export {ButtonTray};