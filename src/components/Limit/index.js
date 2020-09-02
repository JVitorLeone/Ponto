import React, {useState} from 'react';
import {getTime, getTimeToHourString} from '../../utils/DateUtils'

import {
	Container,
	LimitInput
} from './style';

/*
	TODO: Incluir mensagem informando que é necessário
			adicionar um limite
*/

function Limit({limit, setLimit}){
	const [limitPlaceholder, setLimitPlaceholder] = useState(
		getTimeToHourString(limit).slice(0,5)
	);

	function changeGoal(value){
		if (value){
			setLimit(getTime(value));
			setLimitPlaceholder(value);
		} else {
			setLimit(0);
			setLimitPlaceholder(0);
		}
	}

	return (
		<Container>
			Duração do expediente:
			<LimitInput
				type="time"
				valid={ limit !== 0 }
				onChange={ ({target}) => changeGoal(target.value) }
				value={limitPlaceholder}
			/>
		</Container>
	)
}

export { Limit };