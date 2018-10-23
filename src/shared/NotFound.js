import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
	constructor(props){
		super(props)
	}


	render() {
		return(
			<div id="main" className="main">
				<div className="NotFound__container">
					<h1 className="NotFound__main-header">Error 404</h1>
					<h2 className="NotFound__sub-header">Sorry we can't find the page that you are looking for.</h2>
					<p className="NotFound__text"> 
						If you need help finding something or if you have questions you contact us 
						<NavLink to="/contact">here.</NavLink>
					</p>
					<blockquote id="NotFound__quote" className="NotFound__quote">“Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at, then you’re never going to get others to feel anything when they look at your pictures.”
						<cite id="NotFound__quote-citation" className="NotFound__quote-citation"> — Don McCullin</cite>
					</blockquote>
				</div>
			</div>
		)
	}
}

export default NotFound;