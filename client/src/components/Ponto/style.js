import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: var(--main-dark);

	width: 100vw;
	min-height: 100vh;

	margin: 0 auto;
	padding: 3px;

	.slide {
		animation: slide 1.8s ease-in-out forwards;
		@keyframes slide {
			from {
				transform: translateY(0%);
			}
			to {
				transform: translateY(-100%);
			}
		};
	}
`;

export const Wrapper = styled.div``;

export const PontoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	min-width: 300px;
	height: min-content;
	
	padding: 25px 15px;

	background-color: var(--sec-dark);
	border-radius: 5px;

	@media (min-width: 500px) {
		width: 498px;
		padding: 25px;
	}

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

export const Actions = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--sec-dark);
	z-index: 1;
`;
