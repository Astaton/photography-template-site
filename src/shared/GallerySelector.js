//React imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//Redux imports
import { bindActionCreators } from 'redux';

//Actions imports
import * as actionCreators from './actions/gallerySelector_actions';

//React-Redux imports
import { connect } from 'react-redux';


//jQuery import
import $ from "jquery";

class GallerySelector extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.gallerySelectorLoad();
		this.addListeners();
		console.log('GallerySelector props are: ',this.props);
	}

	componentWillUnmount() {
		clearInterval(this.props.gallerySelector.timer);
		this.gallerySelectorReset();
	}

	//save timer to state to clear on unmount so that the timer is cleared even if page is unmounted mid load
	gallerySelectorLoad() {
		let gallerySelectorIds = [
		{ containerId: "#gallerySelector__1-container", gallerySelectorId: "#gallerySelector__1"}, 
		{ containerId: "#gallerySelector__2-container", gallerySelectorId: "#gallerySelector__2"}, 
		{ containerId: "#gallerySelector__3-container", gallerySelectorId: "#gallerySelector__3"}, 
		{ containerId: "#gallerySelector__4-container", gallerySelectorId: "#gallerySelector__4"}
		];
		let counter = 0;
		let timer = setInterval( () => {
			$(gallerySelectorIds[counter].containerId).toggleClass('gallerySelector__section-container--slide-in');
			$(gallerySelectorIds[counter].containerId).toggleClass('gallerySelector__section-container');
			counter++
			if(counter >= gallerySelectorIds.length) {
				clearInterval(timer);
			}
		}, 500);
		this.props.store_timer(timer);
	}

	gallerySelectorReset() {
		let gallerySelectorIds = [
		{ containerId: "#gallerySelector__1-container", gallerySelectorId: "#gallerySelector__1"}, 
		{ containerId: "#gallerySelector__2-container", gallerySelectorId: "#gallerySelector__2"}, 
		{ containerId: "#gallerySelector__3-container", gallerySelectorId: "#gallerySelector__3"}, 
		{ containerId: "#gallerySelector__4-container", gallerySelectorId: "#gallerySelector__4"}
		];
		gallerySelectorIds.forEach( ({ containerId }) => {
			if($(containerId).hasClass('gallerySelector__section-container--slide-in')) {
				$(containerId).toggleClass('gallerySelector__section-container');
				$(containerId).toggleClass('gallerySelector__section-container--slide-in');
			}
		})
	}


	//put listeners directly on to the html tags
	addListeners() {
		let gallerySelectorIds = [
		{ containerId: "#gallerySelector__1-container", gallerySelectorId: "#gallerySelector__1"}, 
		{ containerId: "#gallerySelector__2-container", gallerySelectorId: "#gallerySelector__2"}, 
		{ containerId: "#gallerySelector__3-container", gallerySelectorId: "#gallerySelector__3"}, 
		{ containerId: "#gallerySelector__4-container", gallerySelectorId: "#gallerySelector__4"}
		];
		gallerySelectorIds.forEach( ({ containerId, gallerySelectorId, galleryName }) => {
			$(containerId).hover(() => this.hoverIn(gallerySelectorId), () => this.hoverOut(gallerySelectorId));
			// $(containerId).click(() => this.props.goToGallery());
		});
	}
	

	hoverIn(id) {
		$(id).toggleClass('gallerySelector__section--hover');
		$(id).toggleClass('gallerySelector__section--slide-in');
	}


	hoverOut(id) {
		$(id).toggleClass('gallerySelector__section--slide-in');
		$(id).toggleClass('gallerySelector__section--hover');
	}


	render(){
		return(
			<div className="gallerySelector__container" id="gallerySelector__container">
				<NavLink to="/gallery/action"
					id="gallerySelector__1-container"
					className="gallerySelector__section-container" 
					title="View The Action Gallery"
				>
				    <div className="gallerySelector__section" id="gallerySelector__1">
				    </div>
				    <p className="gallerySelector__text">Action</p>
			    </NavLink>
			    <NavLink to="/gallery/events"
			    	id="gallerySelector__2-container"
			    	className="gallerySelector__section-container"
			    	title="View The Events Gallery"
			    >
			    	<div className="gallerySelector__section" id="gallerySelector__2">
			    	</div>
			    	<p className="gallerySelector__text">Events</p>
			    </NavLink>
			    <NavLink to="/gallery/landscape"
			    	id="gallerySelector__3-container"
			    	className="gallerySelector__section-container"
			    	title="View The Landscape Gallery"
			    >
			    	<div className="gallerySelector__section" id="gallerySelector__3">
			    	</div>
			    	<p className="gallerySelector__text">Landscape</p>
			    </NavLink>
			    <NavLink to="/gallery/portrait"
			    	id="gallerySelector__4-container"
			    	className="gallerySelector__section-container"
			    	title="View The Portrait Gallery"
			    >
			    	<div className="gallerySelector__section" id="gallerySelector__4">
			    	</div>
			    	<p className="gallerySelector__text">Portait</p>
			    </NavLink>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		gallerySelector: state.gallerySelector
	}
}

const dispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(stateToProps, dispatchToProps)(GallerySelector);