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

export const Actions = styled.div`
	width: 100%;
	background-color: #ddd;
	z-index: 1;
`;

export const Printer = styled.div`
	width: 320px;

	border-bottom: 5px solid grey;

	margin: 25px auto 0;
`;
