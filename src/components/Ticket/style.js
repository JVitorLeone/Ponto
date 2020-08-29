import styled from 'styled-components';

export const Container = styled.div`
	display: ${props => props.display};
	flex-direction: column;

	width: 325px;

	font-family: 'Inconsolata', monospace;

	background-color: khaki;

	margin-top: 15px;
	padding: 20px 10px;

	> p {
		padding-bottom: 3px;
	}
`;

export const Title = styled.p`
	text-align: center;
	font-weight: bold;
	margin: 8px 0;
`;

export const Periods = styled.div`
	display: flex;
	flex-direction: row;

	>span + span {
		width: 100%;
	}
`;

export const Period = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Button = styled.button`
	border: none;
	padding: 8px 16px;
	margin: 12px 0 0;

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