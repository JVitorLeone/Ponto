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

	width: 500px;
	height: max-content;

	padding: 25px;
	background-color: var(--sec-dark);
	border-radius: 5px;
`;

export const Actions = styled.div`
	width: 100%;
	background-color: var(--sec-dark);
	z-index: 1;
`;

export const Printer = styled.div`
	width: 320px;

	border: 8px solid var(--main-dark);
	border-bottom: 4px solid var(--sec-dark);
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;

	margin: 25px auto 0;

	box-shadow: 0 2px 3px rgba(0,0,0,.5);
`;
