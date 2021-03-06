export function getTimeToHourString(duration) {
	let {floor, abs} = Math;

	let seconds = floor(abs((duration / 1000) % 60)),
		minutes = floor(abs((duration / (1000 * 60)) % 60)),
		hours = floor(abs((duration / (1000 * 60 * 60)) % 24));

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	return hours + ":" + minutes + ":" + seconds;
}

export function getTime(sHours) {
	sHours = sHours.split(":")
	var seconds = sHours[2] * 1000 || 0,
		minutes = sHours[1] * 1000 * 60,
		hours = sHours[0] * 1000 * 60 * 60;

	return Number(seconds + minutes + hours + 500);
}

export function getDateString(date) {
	return new Date(date).toLocaleString().slice(0,10);
}

export function getHourString(date) {
	return new Date(date).toLocaleString().slice(11);
}

export function getHourNoSecString(date) {
	return new Date(date).toLocaleString().slice(11,16);
}