import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	margin-top: 15px;

	>div {
		width: 100%;
		height: 100%;

		border: none;

		text-align: center;
		font-size: 25px;
		font-weight: bold;
		letter-spacing: 5px;

		padding: 4px 0;
	}
`;

export const Elapsed = styled.div`
	background-color: lightgreen;
`;

export const Remaining = styled.div`
	background-color: lightsalmon;
`;

export const Goal = styled.span`
	display: flex;
	justify-content: end;
	align-items: center;

	padding: 6px 0;

	font-size: small;
`;

export const GoalInput = styled.input`
	width: 100px;
	height: 30px;

	margin-left: 10px;

	:focus {

	}
`;