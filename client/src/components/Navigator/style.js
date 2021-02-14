import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    left: -50px;
    top: 0;

    width: 50px;
    height: min-content;

    display: flex;
    flex-direction: column;
    justify-content: start;

    /* background-color: var(--main-light); */
    @media (max-width: 500px) {
        position: relative;
        flex-direction: row;
        justify-content: end;

        left: 0;
        width: 100%;
    }
`;

export const Button = styled.button`
    height: 50px;
    width: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.active? 'var(--sec-dark)' : 'var(--main-dark);'};

    :hover {
        background-color: ${props => props.active? 'var(--sec-dark)' : 'var(--ter-dark);'};
    }

    border: 1px solid rgba(0,0,0,.2);
    border-right: none;
    border-radius: 5px 0 0 5px;

    cursor: pointer;

    >svg {
        color: var(--green);
    }

    @media (max-width: 500px) {
        border: 1px solid rgba(0,0,0,.2);
        border-top: none;
        border-radius: 0 0 5px 5px;
    }
`;