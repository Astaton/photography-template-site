import { createStore, combineReducers } from 'redux';
import about_reducers from './reducers/about_reducers';
import contact_reducers from './reducers/contact_reducers';
import footer_reducers from './reducers/footer_reducers';
import gallery_reducers from './reducers/gallery_reducers';
import gallerySelector_reducers from './reducers/gallerySelector_reducers';
import header_reducers from './reducers/header_reducers';
import home_reducers from './reducers/home_reducers';
import projector_reducers from './reducers/projector_reducers';


//Add additional reducers in here to be combined into one reducer
const rootReducer = combineReducers({
	about: about_reducers,
	contact: contact_reducers,
	footer: footer_reducers,
	gallery: gallery_reducers,
	gallerySelector: gallerySelector_reducers,
	header: header_reducers,
	home: home_reducers,
	projector: projector_reducers,
})

const store = createStore(
	rootReducer,
	// if redex devtools extension is on the window object run the devtools function
	__isBrowser__ && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;