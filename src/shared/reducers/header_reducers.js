const initialState = {
	linkInfo: [
		{
			key: 'navLink-home', 
			path: '/', 
			name: 'Home'
		},
		{
			key: 'navLink-gallery', 
			path: '/gallery', 
			name: 'Photo Gallery'
		},
		{
			key: 'navLink-about', 
			path: '/about', 
			name: 'About Bokeh'
		},
		{
			key: 'navLink-contact', 
			path: '/contact', 
			name: 'Contact Us'
		},
		{
			key: 'navLink-test', 
			path: '/test', 
			name: 'Test Page'
		},
	],
	mobileMenu: false,
}

function header_reducers(state=initialState, action) {
	switch(action.type) {
		case 'MOBILE_HEADER_STATUS':
			let mobileMenu = action.mobileMenu
			return { ...state, mobileMenu }
		default:
			return state
	}
}

export default header_reducers;