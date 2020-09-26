import styled from 'styled-components';

export const Printer = styled.div`
	position: relative;
	width: 90%;

	border: 12px solid var(--main-dark);
	border-bottom: 4px solid var(--sec-dark);
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;

	margin: 15px auto 0;

	box-shadow: 0 2px 3px rgba(0,0,0,.5);
`;

export const R = styled.div`
	position: absolute;
	top: 25px;

	animation: scale .6s ease-in-out both;
	@keyframes scale {
		from { 
			transform: scale(.6);	
		}
		to { 
			transform: scale(1);
		}
	}
`;

export const Wrapper = styled.div`
	position: absolute;
    width: 100%;
    height: ${props => props.height};
    clip-path: inset(0);

	animation: grow 2.3s ease-in-out .5s both;
	@keyframes grow {
		from {height: 0;}
		to { height: ${props => props.height}; }
	};
`;

export const Container = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;

	width: 100%;

	font-family: 'Inconsolata', monospace;

	background-color: khaki;

	padding: 20px 10px;

	> p {
		padding-bottom: 3px;
	}

	animation: print 2.5s ease-in-out .5s both;
	@keyframes print {
		from {
			transform: translateY(-100%);
		}
		20% {
			transform: translateY(-90%);
		}
		40% {
			transform: translateY(-70%);
		}
		to {
			transform: translateY(0%);
		}
	};
	z-index: 0;

	box-shadow: inset 0 2px 3px rgba(0,0,0,.5);
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

export const Message = styled.div`
	color: var(--main-light);
	font-size: 18px;
	text-align: center;

	animation: show .5s ease-in-out both;
	@keyframes show {
		from { 
			opacity: 0; 
		}
		to { 
			opacity: 1; 
		}
	}
`;