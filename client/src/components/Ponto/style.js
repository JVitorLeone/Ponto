import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;

	background-color: var(--main-dark);

	width: 100vw;
	min-height: 100vh;

	margin: 0 auto;
	padding: 3px;
`;

export const PontoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	min-width: 300px;

	padding: 25px 15px;

	background-color: var(--sec-dark);
	border-radius: 5px;

	@media (min-width: 500px) {
		width: 498px;
		height: min-content;

		padding: 25px;
	}
`;

export const Actions = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--sec-dark);
	z-index: 1;
`;

export const Row = styled.div`
	width: 100%;
`;
