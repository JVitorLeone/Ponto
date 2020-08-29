import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	background-color: var(--ter-dark);
	width: 100%;

	margin-top: 15px;
`;

export const Button = styled.button`
	flex: auto;

	border: none;
	padding: 8px 16px;

	background-color: inherit;
	color: var(--main-light);

	border: 1px solid rgba(0,0,0,.2);

	:hover:not([disabled]) {
		background-color: var(--main-dark);
	}

	:disabled {
		color: rgba(255,255,255,.3);
	}

	>svg {
		vertical-align: middle;
		margin: 0 5px;
	}
`;
