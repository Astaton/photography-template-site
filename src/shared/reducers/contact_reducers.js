const initialState = {
	message: ['',''],
	redirect: false
	};

function contact_reducers(state=initialState, action) {
	switch(action.type) {
		case 'STORE_MESSAGE':
			let message = action.message;
			return { ...state, message }
		case 'REDIRECT_CHECK':
			let redirect = action.redirect;
			return { ...state, redirect }
		default:
			return state;
	}
}

export default contact_reducers;