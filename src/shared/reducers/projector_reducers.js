const initialState = {
	currentSlideNo: 0,
	pauseSlideShow: false,
	showFilmstrip: false,
}

function projector_reducers(state=initialState, action) {
	switch(action.type) {
		case 'STORE_CURRENT_SLIDE_INFO':
			let currentSlideInfo = action.currentSlideInfo;
			return { ...state, currentSlideInfo }
		case 'STORE_CURRENT_SLIDE_NO':
			let currentSlideNo = action.currentSlideNo;
			return { ...state, currentSlideNo}
		case 'INCREMENT_SLIDE':
			currentSlideNo = action.currentSlideNo;
			let totalNoSlides = action.totalNoSlides;
			if(currentSlideNo == totalNoSlides - 1){
				currentSlideNo = 0;
			} else {
				currentSlideNo += 1;
			}
			return { ...state, currentSlideNo }
		case 'DECREMENT_SLIDE':
			currentSlideNo = action.currentSlideNo;
			totalNoSlides = action.totalNoSlides;
			if(currentSlideNo == 0){
				currentSlideNo = totalNoSlides - 1;
			} else {
				currentSlideNo -= 1;
			}
			return { ...state, currentSlideNo }
		case 'PAUSE_SLIDE_SHOW':
			let pauseSlideShow = action.pauseSlideShow
			return { ...state, pauseSlideShow }
		case 'STORE_TIMER':
			let intervalTimer = action.intervalTimer;
			return { ...state, intervalTimer };
		case 'LOAD_NEW_SLIDES':
			let slides = action.slides;
			currentSlideInfo = slides[0];
			currentSlideNo = 0 
			return { ...state, slides, currentSlideInfo,  currentSlideNo};
		case 'UNLOAD_SLIDES':
			let tempState = { ...state };
			delete tempState['currentSlideInfo'];
			delete tempState['slides'];
			return { ...tempState };
		case 'SHOW_FILMSTRIP':
			let showFilmstrip = action.showFilmstrip;
			return { ...state, showFilmstrip }
		case 'STORE_FILMSTRIP_DEFAULT_POSITIONS':
			let filmstripDefaultPositions = action.filmstripDefaultPositions;
			return { ...state, filmstripDefaultPositions};
		default:
			return state;
	}
}

	// currentSlideInfo: {
	// 	name: 'above-the-clouds',
	// 	image: require('../../../assets/images/galleries/photographer/above-the-clouds.jpeg')
	// },

export default projector_reducers;