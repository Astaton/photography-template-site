import gallerySlides from '../data/gallerySlides';

const initialState = {}

function about_reducers(state=initialState, action) {
	switch(action.type) {
		case 'ADD_PHOTO':
			let photoInfo = action.photoInfo;
			let slides = [ ...actions.currentSlides ];
			slides.push(photoInfo);
			return { ...state, slides }
		case 'CHOOSE_GALLERY':
			let gallery = action.gallery;
			slides = [ ...gallerySlides[gallery] ]
			return { ...state, slides }
		default:
			return state
	}
}

export default about_reducers;