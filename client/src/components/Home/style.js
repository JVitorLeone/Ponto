import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: min-content;
    padding: 8px;
    width: 100%;
`;

export const Item = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

    border-radius: 8px;
    background-color: var(--ter-dark);
    padding: 12px;

    max-width: 120px;
    cursor: pointer;
    
    box-shadow: 3px 3px 15px rgba(0,0,0,.3);
    transition: all .15s linear;
    :hover {
        box-shadow: 15px 15px 15px rgba(0,0,0,.3);
        background-color: var(--sec-dark);
    }
`;

export const Label = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: var(--main-light);
    padding: 5px 0 0;
`;