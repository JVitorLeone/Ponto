import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

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

export { GlobalStyles };