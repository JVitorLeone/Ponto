export const Journey = (id, date, periods) => { return {
	id: id,
	date: date,
	periods: periods || []
}};

export const Period = (start, finish) => { return {
	start: start,
	finish: finish
}};