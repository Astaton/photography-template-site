const initialState = {
	pauseSlideShow: false,
};

function home_reducers(state = initialState, action) {
	switch(action.type) {
		case 'STORE_TIMER':
			let intervalTimer = action.intervalTimer;
			return { ...state, intervalTimer };
		case 'STORE_WINDOW_WIDTH':
			let windowWidth = action.windowWidth;
			return { ...state, windowWidth };
		case 'PAUSE_SLIDE_SHOW':
			let pauseSlideShow = action.pauseSlideShow;
			return { ...state, pauseSlideShow };
		default:
			return state;
	}
}

export default home_reducers;