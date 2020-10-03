import React, {useState} from 'react';
import {getTime, getTimeToHourString} from '../../utils/DateUtils'

import {
	Container,
	Title,
	Row,
	TimeInput,
	Save,
	Divisor
} from './style';

/*
	TODO: Incluir mensagem informando que é necessário
			adicionar um limite
*/

function Settings({limit, setLimit, close}){
	const [values, setValues] = useState({
		limit: getTimeToHourString(limit).slice(0,5),
		max_pause: 0
	});

	function updateValue(target){
		setValues({
			...values,
			[target.id]: target.value
		})
	}

	function saveValues() {
		if (values.limit) 
			setLimit(getTime(values.limit));

		close();
	}

	return (
		<Container>
			<Title>Configurações</Title>
			<Row>
				Duração do expediente:
				<TimeInput
					id="limit"
					type="time"
					valid={ limit !== 0 }
					onChange={ ({target}) => updateValue(target) }
					value={ values.limit }
				/>
			</Row>
			<Divisor/>
			<Row>
				Tempo mínimo de intervalo:
				<TimeInput
					id="max_pause"
					type="time"
					onChange={ ({target}) => updateValue(target) }
					value={ values.max_pause }
				/>
			</Row>
			<Row>
				<Save
					onClick={ () => saveValues() }
				>
					Gravar
				</Save>
			</Row>
		</Container>
	)
}

export { Settings };