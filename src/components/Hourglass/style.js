import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 420px) {
		flex-direction: row;
	}

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

		padding: 0 0 4px 0;

		animation: opacity .5s linear;
		@keyframes opacity {
			from { opacity:0 }
			to { opacity:1 }
		}

		>p {
			padding: 3px 0;
			background-color: rgba(0,0,0,0.1);
			font-size: small;
			letter-spacing: initial;
		}
	}
`;

export const Total = styled.div`
	background-color: var(--green);
`;

export const Remaining = styled.div`
	background-color: var(--orange);
`;

export const Limit = styled.span`
	display: flex;
	justify-content: end;
	align-items: center;

	padding: 6px 0;

	font-size: small;
`;
