import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;

	/* animation: slidedown 1s ease-out forwards reverse;
	@keyframes slidedown {
		from {
			transform: translateY(0%);
		}
		to {
			transform: translateY(-100%);
		}
	}; */
`;

export const Box = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: min-content;
	
	padding: 25px 15px;

	background-color: var(--sec-dark);
	border-radius: 0 5px 5px 5px;

	@media (min-width: 500px) {
		padding: 25px;
	}
`;

export const Journey = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 10px;
	margin: 5px;

	background-color: rgba(0,0,0,.07);
	color: var(--main-light);

	> span {
		flex: 1;
	}

	:hover {
		background-color: var(--ter-dark);
	}
`;

export const Date = styled.span`
	font-weight: bold;
`;

export const Start = styled.span`
	text-align: center;

`;

export const Status = styled.span`
	color: ${props => props.finished ? `var(--green)` : `var(--orange);`};
	text-align: end;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 10px;
	margin: 5px;

	color: var(--main-light);
	background-color: var(--ter-dark);

	border: 1px solid var(--main-dark);
	border-radius: 4px;
`;

export const Col = styled.span`
	text-align: center;
	font-weight: bold;
	flex: 1;
`;

export const Pages = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 45px;
	margin: 5px;

	color: var(--main-light);

	> span {
		text-align: center;
		font-size: small;
	}

	> button {
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
	}
`;

export const Prev = styled.button`
	left: 0;
`;

export const Next = styled.button`
	right: 0;
`;
