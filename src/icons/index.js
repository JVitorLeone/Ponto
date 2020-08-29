import React from 'react';

const defaultWidth = "24px";
const defaultColor = "inherit";

function DefaultSVG({children}, props){
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			width={ props.width || defaultWidth }
			color={ props.color || defaultColor }
		>
			{ children }
		</svg>
	);
}

export function StopIcon(props){
	return (
		<DefaultSVG { ...props }>
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
		</DefaultSVG>
	);
}

export function XIcon(props){
	return (
		<DefaultSVG { ...props }>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
		</DefaultSVG>
	);
}

export function PlayIcon(props){
	return (
		<DefaultSVG { ...props } cade={props.width}>
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
		</DefaultSVG>
	);
}

export function PauseIcon(props){
	return	(
		<DefaultSVG { ...props }>
			<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
		</DefaultSVG>
	);
}

export function XCircleIcon(props){
	return	(
		<DefaultSVG { ...props }>
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
		</DefaultSVG>
	);
}

export function ClockIcon(props){
	return	(
		<DefaultSVG { ...props }>
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
		</DefaultSVG>
	);
}


export function CheckIcon(props){
	return	(
		<DefaultSVG { ...props }>
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
		</DefaultSVG>
	);
}

export function BookMarkIcon(props){
	return (
		<DefaultSVG { ...props }>
			<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
		</DefaultSVG>
	)
}