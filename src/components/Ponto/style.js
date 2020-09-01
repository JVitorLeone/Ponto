import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;

	background-color: var(--main-dark);

	width: 100vw;
	height: 100vh;

	margin: 0 auto;
	padding-top: 50px;
`;

export const PontoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: min-content;
	height: max-content;

	padding: 25px;

	background-color: var(--sec-dark);
	border-radius: 5px;
`;

export const Actions = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--sec-dark);
	z-index: 1;
`;
