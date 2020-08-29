import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;


`;

export const Container = styled.div`
	position: absolute;
	left: calc(50% - 150px);
	display: flex;
	flex-direction: column;

	width: 300px;

	font-family: 'Inconsolata', monospace;

	background-color: khaki;

	padding: 20px 10px;

	> p {
		padding-bottom: 3px;
	}

	animation: print 5s linear;
	@keyframes print {
		from { bottom: 0; }
		50% { bottom: -200px }
		to { top: 0; bottom: unset; }
	}

	z-index: 0;
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