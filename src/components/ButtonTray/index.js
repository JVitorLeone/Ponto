import React from 'react';

import {Container, Button} from './style.js';

import { StopIcon, PlayIcon, CheckIcon } from '../../icons';

function ButtonTray(props) {
	const { start, stop, finish, isActive, canStart, canFinish } = props;

	var ableToStart = isActive ? false : canStart;

	var title = !ableToStart && canFinish;
	return (
		<Container>
			<Button
				onClick={ () => start() }
				disabled={ !ableToStart }
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
				disabled={ !canFinish }
			>
				Finalizar
				<CheckIcon/>
			</Button>
		</Container>
	);
}

export {ButtonTray};