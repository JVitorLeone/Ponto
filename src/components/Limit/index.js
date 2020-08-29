import React from 'react';
import {getTime} from '../../utils/DateUtils'

import {
	Container,
	LimitInput
} from './style';


/*
	TODO: Incluir mensagem informando que é necessário
			adicionar um limite
*/
function Limit({limit, setLimit}){

	function changeGoal(value){
		if (value){
			setLimit(getTime(value));
		} else {
			setLimit(0);
		}
	}

	return (
		<Container>
			Duração do expediente:
			<LimitInput
				type="time"
				valid={ limit !== 0 }
				onChange={ ({target}) => changeGoal(target.value) }
			/>
		</Container>
	)
}

export { Limit };