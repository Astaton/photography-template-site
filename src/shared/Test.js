//React imports
import React, { Component } from 'react';

//React Component imports
import Loader from './Loader';

class Test extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="main">
				<p>My Loader isn't it great?</p>
				<Loader />
			</div>
		)
	}
}

export default Test;