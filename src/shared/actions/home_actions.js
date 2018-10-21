export function store_timer(intervalTimer) {
	return {
		type: 'STORE_TIMER',
		intervalTimer
	}
}

export function store_window_width(windowWidth) {
	return {
		type: 'STORE_WINDOW_WIDTH',
		windowWidth
	}
}

export function pause_slide_show(pauseSlideShow) {
	return {
		type: 'PAUSE_SLIDE_SHOW',
		pauseSlideShow
	}
}