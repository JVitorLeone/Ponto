export const Journey = (date, periods) => { return {
	date: date,
	periods: periods || []
}};

export const Period = (start, finish) => { return {
	start: start,
	finish: finish
}};