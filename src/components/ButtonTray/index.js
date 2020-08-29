import React from 'react';

import {Container, Button} from './style.js';

import { PauseIcon, PlayIcon, CheckIcon } from '../../icons';

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
				<PlayIcon/>
				Começar
			</Button>
			<Button
				onClick={ () => stop() }
				disabled={ !isActive }
			>
				<PauseIcon/>
				Pausar
			</Button>
			<Button
				onClick={ () => finish() }
				disabled={ !canFinish }
			>
				<CheckIcon/>
				Finalizar
			</Button>
		</Container>
	);
}

export {ButtonTray};