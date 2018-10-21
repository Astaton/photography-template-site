const initialState = {};

function gallerySelector_reducers(state = initialState, action) {
	switch(action.type) {
		case 'STORE_TIMER':
			let timer = action.timer;
			return { ...state, timer };
		case 'CLEAR_TIMER':
			timer = action.timer;
			return {...state, timer}
		default:
			return state;
	}
}

export default gallerySelector_reducers;