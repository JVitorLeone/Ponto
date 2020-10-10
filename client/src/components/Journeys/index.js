import React from 'react';
import {useHistory} from 'react-router-dom';

import {Wrapper, Box} from './style';

function Journeys(props) {
    const history = useHistory();

    return (
        <Wrapper>
            <Box>
                <h1>Suas Jornadas!</h1>
            </Box>
        </Wrapper>
    )
}

export {Journeys};