export function store_timer(timer) {
	return {
		type: 'STORE_TIMER',
		timer
	}
}

export function clear_timer() {
	return {
		type: 'CLEAR_TIMER',
		timer: false
	}
}