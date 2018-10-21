//object that is the begining template of the state
const initialState = {
	blank_key: "This is blank",
}

//Reducer
function blankReducer(state = initialState, action) {
	const user = {
		name: 'Bob Barker',
		email: '',
		gender: ''
	};

	//Always switch on action.type
	switch (action.type) {
		//case names should be all capitals
		case 'GET_USER_NAME':
			user.name = action.payload.name;
			//cases must return a new state object
			return { ...state, user }
		case 'GET_USER_EMAIL':
			user.email = action.payload.name;
			return { ...state, user }
		case 'GET_USER_GENDER':
			user.gender = action.payload.gender;
			return { ...state, user}
		//A default case is mandatory, because the switch case is run, automatically without an action, at launch to get the initial state
		default:
			return state;
	}
}

export default blankReducer;