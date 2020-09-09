import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;

	padding: 8px;

	color: var(--main-light);
	font-size: small;

	animation: show .3s ease-out;
	@keyframes show {
		from { opacity: 0; }
		to { opacity: 1; }
	}
`;

export const Title = styled.p`
	padding: 3px 0 8px;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: 3px 0;
	width: 100%;
`;

export const TimeInput = styled.input`
	width: 100px;
	line-height: 35px;
	margin-left: 10px;

	@media (min-width: 500px) {
		line-height: 28px;
	}
`;

export const Save = styled.button`
	margin-top: 10px;

	flex: 100%;

	border: none;
	padding: 8px 16px;

	background-color: var(--ter-dark);
	color: var(--main-light);

	border: 1px solid rgba(0,0,0,.2);

	:hover:not([disabled]) {
		background-color: var(--sec-dark);
	}

	:disabled {
		color: rgba(255,255,255,.3);
	}

	>svg {
		vertical-align: middle;
		margin: 0 5px;
	}
`;

export const Divisor = styled.hr`
	width: 99%;
	margin: 5px;

	border: none;
	border-top: 1px solid rgba(255,255,255,.1);
`;