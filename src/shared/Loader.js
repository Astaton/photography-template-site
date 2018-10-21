import React from 'react';

const Loader = (props) => {
	return(
		<div id={props.loaderId} className="loader__container">
			<img id="logo-loader1" className="loader__logo" src={require('../../assets/logos/logo-loader1.svg')}></img>
			<img id="logo-loader2" className="loader__logo" src={require('../../assets/logos/logo-loader2.svg')}></img>
		</div>
	)
}

export default Loader;