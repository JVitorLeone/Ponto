import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	background-color: var(--ter-dark);
	width: 100%;

	margin-top: 15px;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const Button = styled.button`
	flex: auto;

	padding: 8px 16px;

	background-color: var(--ter-dark);
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

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	background-color: var(--main-dark);

	border-right: 1px solid rgba(0,0,0,.2);
	border-left: 1px solid rgba(0,0,0,.2);

	box-shadow: inset 0 2px 5px rgba(0,0,0,.15),
				inset 0 -2px 5px rgba(0,0,0,.15);
`;

export const SettingsButton = styled.button`
	flex: auto;

	border: none;
	padding: 3px 3px;

	background-color: ${props => props.isOpen ? `var(--main-dark)` : `var(--ter-dark);`};
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