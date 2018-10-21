const initialState = {
	slides: [
		{
			name: 'above-the-clouds',
			image: require('../../../assets/images/galleries/photographer/above-the-clouds.jpeg')
		},
		{
			name: 'beach-shoot',
			image: require('../../../assets/images/galleries/photographer/beach-shoot.jpg')
		},
		{
			name: 'field-shoot',
			image: require('../../../assets/images/galleries/photographer/field-shoot.jpeg')
		},
		{
			name: 'in-and-out-of-focus',
			image: require('../../../assets/images/galleries/photographer/in-and-out-of-focus.jpeg')
		},
		{
			name: 'smoke-cloud',
			image: require('../../../assets/images/galleries/photographer/smoke-cloud.jpeg')
		},
		{
			name: 'at-dusk',
			image: require('../../../assets/images/galleries/photographer/at-dusk.jpeg')
		},
	],
	photoInfo: {
			name: 'above-the-clouds',
			image: require('../../../assets/images/galleries/photographer/above-the-clouds.jpeg')
		}
}

function about_reducers(state=initialState, action) {
	switch(action.type) {
		case 'ADD_PHOTO':
			let photoInfo = action.photoInfo;
			let slides = [ ...actions.currentSlides ];
			slides.push(photoInfo);
			return { ...state, slides }
		default:
			return state
	}
}

export default about_reducers;