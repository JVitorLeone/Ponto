import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;

	background-color: #eee;

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
	background-color: #ddd;
	border-radius: 5px;
`;
