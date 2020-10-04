import React from 'react';
import {useHistory} from 'react-router-dom';

import {FolderIcon, ClockIcon} from '../../icons';
import {Container, Button} from './style';

function Navigator(props) {
    const history = useHistory();
    
    let active = history.location.pathname;
    console.log(active);

    return (
        <Container>

            <Button
                onClick={ () => history.push("/ponto") }
                title="Ponto"
                color={"rgb(235, 45, 45)"} 
                active={ active == '/ponto' } >
                    <ClockIcon/>
            </Button>

            <Button 
                onClick={ () => history.push("/journeys") }
                title="Jornadas" 
                color={"rgb(255, 227, 0)"} 
                active={ active == '/journeys' } >
                    <FolderIcon/>
            </Button>

        </Container>
    );
}

export {Navigator};