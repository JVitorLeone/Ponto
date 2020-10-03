import React, {useState} from 'react';

import {
	Container,
	Row,
	Button,
	Wrapper,
	SettingsButton
} from './style.js';

import {
	PauseIcon,
	PlayIcon,
	CheckIcon,
	SettingsIcon,
	ChevronsUpIcon,
	ChevronsDownIcon
} from '../../icons';

import {Settings} from '../Settings';

function ButtonTray(props) {
	const {
		start,
		stop,
		finish,
		isActive,
		canStart,
		canFinish,
		limit,
		setLimit } = props;

	var ableToStart = isActive ? false : canStart;

	const [settingsIsOpen, setSettingsIsOpen] = useState(false);

	var title = !ableToStart && canFinish;
	return (
		<Container>
			<Row>
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
				<SettingsButton
					onClick={() => setSettingsIsOpen(!settingsIsOpen)}
					isOpen={ settingsIsOpen }
					title="Configurações"
				>
					{ settingsIsOpen ? (
						<ChevronsUpIcon width="18px"/>
					) : (
						<ChevronsDownIcon width="18px"/>
					) }

				</SettingsButton>
			</Row>
			<Wrapper>
				{ settingsIsOpen && (
					<Settings
						setLimit={(l) => setLimit(l)}
						limit={ limit }
						close={ () => setSettingsIsOpen(false) }
					/>
				)}
			</Wrapper>

		</Container>
	);
}

export {ButtonTray};