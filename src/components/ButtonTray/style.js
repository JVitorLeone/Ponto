import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	width: 100%;

	margin-top: 15px;
`;

export const Button = styled.button`
	flex: auto;

	border: none;
	padding: 8px 16px;

	:hover {
		background-color: #fff;
	}

	:disabled {
		background-color: #ccc;
	}

	>svg {
		vertical-align: middle;
		margin-left: 5px;
	}
`;
