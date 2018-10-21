//React imports
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//React-Redux imports
import { Provider } from 'react-redux';
import store from '../shared/store';

//React component imports
import App from '../shared/App';

//style imports
import '../scss/style.scss';


hydrate(
	<Provider store={store} >
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);