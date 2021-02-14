import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Container, Button} from './style';

import {HomeIcon} from '../../icons';

function Navigator(props) {
    const history = useHistory();
    const [active, setActive] = useState();
    const {items} = props;

    const onClick = (item) => {
        setActive(item.title);
        item.onClick();
    }

    useEffect(() => {
        if (props.items[0])
            setActive(props.items[0].title);
    },[]);

    return (
        <Container>
            {items.map((item, key) => {
                return (
                    <Button
                        key={key}
                        onClick={ () => onClick(item) }
                        title={item.title}
                        active={ active === item.title } >
                            <item.icon/>
                    </Button>    
                );
            })}

            <Button
                key={9999}
                onClick={ () => history.push('/') }
                title="Home"
                active={ active === "Home" } >
                    <HomeIcon />
            </Button> 
        </Container>
    );
}

export {Navigator};