import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 15px;
	width: 100%;

	>div {
		
	}
`;

export const Timer = styled.div`
	background-color: ${props => 'var(--' + props.bg + ')'};

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
`;


export const Periods = styled.div`
	color: var(--main-light);

	width: 100%;
	margin: 10px auto;

	border: 1px solid rgba(0,0,0,.2);

	>p {
		background-color: var(--ter-dark);

		text-align: center;
		padding: 3px 0;

		font-size: small;
		font-weight: bold;
		letter-spacing: initial;
		cursor: pointer;

		>svg {
			float: right;
			margin-right: 5px;
		}
	}
`;


export const Period = styled.div`
	display: flex;
	justify-content: space-between;

	background-color: var(--main-dark);

	>div {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 14px;
	}
`;

export const Counter = styled.div`
	width: 25px;
`;

export const Time = styled.div`
	flex: auto;
	padding: 2px 8px;

	>span {
		padding: 0px 15px;
		width: 100%;
		text-align: center;
	}
`;


