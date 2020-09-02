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

	width: 350px;
	height: max-content;

	padding: 25px;

	background-color: var(--sec-dark);
	border-radius: 5px;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100px;
`;