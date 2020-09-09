import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	padding: 8px;
	background-color: var(--ter-dark);
	color: green;

	border-color: rgba(0,0,0,.2);

	>h1 {
		display: table;
		margin: 0 auto;

		font-size: 1.5rem;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;

	letter-spacing: 3px;

	font-weight: bold;
	font-size: 30px;


	&:before {
		content: "${props => props.desc}";
		color: rgba(255,255,255,.5);
		font-size: small;
		position: absolute;
		left: 15px;
		top: 10px;
	}
`;
