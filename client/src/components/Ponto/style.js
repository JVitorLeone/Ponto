import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;

	animation: slidedown 1s ease-in-out forwards reverse;
	@keyframes slidedown {
		from {
			transform: translateY(0%);
		}
		to {
			transform: translateY(-100%);
		}
	};
`;

export const PontoBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
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


