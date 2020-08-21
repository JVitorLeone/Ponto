import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 1024px;
	height: 100vh;

	margin: 0 auto;

	background-color: #eee;
`;

export const PontoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 500px;

	padding: 25px;
	background-color: #ddd;
	border-radius: 5px;
`;

export const CurrentTime = styled.div`
	width: 100%;
	height: 54px;

	padding: 8px;
	margin-bottom: 20px;
	background-color: rgba(0,0,0,.8);
	color: green;

	>h1 {
	 	display: table;
		margin: 0 auto;
	}
`;


export const ButtonTray = styled.div`
	display: flex;
	flex-direction: row;
`;