import React from 'react';
import {useHistory} from 'react-router-dom';

import {Navigator} from '../Navigator';

function Journeys(props) {
    const history = useHistory();

    return (
        <>

            <h1>Suas Jornadas!</h1>

            <Navigator />
        
        </>
    )
}

export {Journeys};