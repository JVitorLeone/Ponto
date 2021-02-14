import React from 'react';
import {useHistory} from 'react-router-dom';

import {
	Container, Item, Label
} from './style';

import {ClockIcon} from '../../icons';

function Home(props){
    const history = useHistory();

	return (
		<Container>
            <Item onClick={() => history.push('/ponto')}>
                <ClockIcon color="var(--green)" width="50px"/>
                <Label>Ponto</Label>
            </Item>

        </Container>
	);
}

export { Home };