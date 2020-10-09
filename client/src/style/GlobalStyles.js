import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	:root {
		--main-dark: rgb(28, 28, 28);
		--sec-dark: rgb(46, 46, 46);
		--ter-dark: rgb(37,37,37);
		--main-light: #ffffff;
		--green: #8bee8b;
		--orange: #ff9e80;
		--yellow: rgb(247, 246, 200);

	}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		/* font-family: 'Oswald', sans-serif; */
		font-family: 'Roboto', sans-serif;
		height: 100%;
	}

	@media only screen and (max-width: 580px) {
		body {
			display: flex;
			flex-direction: column;
		}

	}
`;

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

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;

	flex-grow: 1;

	min-width: 300px;
	@media (min-width: 500px){
		width: 498px;
	}
`;