import React, {useState, useEffect} from 'react';

import {
	Container,
	PontoBox,
	CurrentTime,
	ButtonTray
} from './style';

function Ponto(){
	const [time, setTime] = useState(new Date().toLocaleString());
	const [timeInterval, setTimeInterval] = useState();

	function tick() {
		let current = new Date().toLocaleString();
		if (time !== current) setTime(current);
	};

	function stopTime(){
		clearInterval(timeInterval)
		setTimeInterval(undefined);
	};

	function startTime(){
		if( timeInterval == undefined ) {
			setTimeInterval(
				setInterval(tick, 1000)
			);
			setTime(new Date().toLocaleString());
		}
	}

	useEffect(() => {
		startTime();
	},[])

	return (
		<Container>
			<PontoBox>
				<CurrentTime>
					<h1>{ time }</h1>
				</CurrentTime>

				<ButtonTray>
					<button
						onClick={ () => stopTime() }
						disabled={ timeInterval == undefined }
					>
					Parar
					</button>
					<button
						onClick={ () => startTime(timeInterval) }
						disabled={ timeInterval != undefined }
					>
					Recomeçar
					</button>
				</ButtonTray>
			</PontoBox>
		</Container>
	);
}

export { Ponto };