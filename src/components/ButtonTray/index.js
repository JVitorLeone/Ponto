import React from 'react';

import {Container, Button} from './style.js';

import { StopIcon, PlayIcon, CheckIcon } from '../../icons';

function ButtonTray(props) {
	const { start, stop, finish, isActive } = props;

	return (
		<Container>
			<Button
				onClick={ () => start() }
				disabled={ isActive }
			>
				Começar
				<PlayIcon/>
			</Button>
			<Button
				onClick={ () => stop() }
				disabled={ !isActive }
			>
				Parar
				<StopIcon/>
			</Button>
			<Button
				onClick={ () => finish() }
			>
				Finalizar
				<CheckIcon/>
			</Button>
		</Container>
	);
}

export {ButtonTray};