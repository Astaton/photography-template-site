//React imports
import React, { Component } from 'react';
import {
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

//React Component imports
import Header from './Header';
import Footer from './Footer';

//Routes import
import routes from './routes';

class App extends Component {

	
	render() {
		return(
			<div id="page-wrapper" className='page-wrapper'>
				<Header />
					<Switch>
						{routes.map(({ path, exact, component: C, ...rest }) => (
							<Route
								key={path}
								path={path}
								exact={exact}
								render={(props) => (
									<C {...props} {...rest} />
								)} 
							/>
						))}
					</Switch>
				<Footer />
			</div>
		)
	}
}

export default App;