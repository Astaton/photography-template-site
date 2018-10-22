export function store_current_slide_info(currentSlideInfo) {
	return {
		type: 'STORE_CURRENT_SLIDE_INFO',
		currentSlideInfo
	}
}

export function store_current_slide_no(currentSlideNo) {
	return {
		type: 'STORE_CURRENT_SLIDE_NO',
		currentSlideNo
	}
}

export function increment_slide(currentSlideNo, totalNoSlides) {
	return {
		type: 'INCREMENT_SLIDE',
		currentSlideNo,
		totalNoSlides
	}
}

export function decrement_slide(currentSlideNo, totalNoSlides) {
	return {
		type: 'DECREMENT_SLIDE',
		currentSlideNo,
		totalNoSlides
	}
}

export function pause_slide_show(pauseSlideShow) {
	return {
		type: 'PAUSE_SLIDE_SHOW',
		pauseSlideShow
	}
}

export function store_timer(intervalTimer) {
	return {
		type: 'STORE_TIMER',
		intervalTimer
	}
}

export function load_new_slides(slides) {
	return {
		type: 'LOAD_NEW_SLIDES',
		slides
	}
}

export function unload_slides() {
	return {
		type: 'UNLOAD_SLIDES',
	}
}

export function show_filmstrip(showFilmstrip) {
	return {
		type: 'SHOW_FILMSTRIP',
		showFilmstrip
	}
}

export function store_filmstrip_default_positions(filmstripDefaultPositions) {
	return {
		type: 'STORE_FILMSTRIP_DEFAULT_POSITIONS',
		filmstripDefaultPositions
	}
}