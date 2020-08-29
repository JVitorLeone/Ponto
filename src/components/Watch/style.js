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