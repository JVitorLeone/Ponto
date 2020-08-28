import React from 'react';
import {getTime} from '../../utils/DateUtils'

import {
	Container,
	LimitInput
} from './style';

function Limit({setLimit}){

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
				onChange={ ({target}) => changeGoal(target.value) }
			/>
		</Container>
	)
}

export { Limit };