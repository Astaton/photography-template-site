//React imports
import React, { Component } from 'react';

//Redux imports
import { bindActionCreators } from 'redux';

//React-Redux imports
import { connect } from 'react-redux';

//Actions import
import * as galleryActions from './actions/gallery_actions';
import * as projectorActions from './actions/projector_actions';

//React Component imports
import GallerySelector from './GallerySelector';
import Projector from './Projector';

class Gallery extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("on mount Gallery props are", this.props);
		console.log();
	}

	componentDidUpdate() {
		// console.log("on update Gallery props are", this.props);
	}

	componentWillUnmount() {
		this.closeGallery();
	}


	closeGallery() {
		if($("#main").hasClass("main--gallery")){
			$("#main").toggleClass("main");
			$("#main").toggleClass("main--gallery");
			$("#gallerySelector__container").toggleClass("gallerySelector__container");
			$("#gallerySelector__container").toggleClass("gallerySelector__container--open");
			$("#gallery__images").toggleClass("gallery__images-closed");
			$("#gallery__images").toggleClass("gallery__images");
		}
		if(!$("#projector__control-down").hasClass("projector__control-down")){
			$("#projector__control-down").toggleClass("projector__control-down--shift");
			$("#projector__control-down").toggleClass("projector__control-down--filmstrip-shift");
		}
	}



	render(){
		let slides = this.props.gallery.slides;
		return(
			<div className="main" id="main">
				<GallerySelector choose_gallery={ this.props.actions.choose_gallery } unload_slides={ this.props.actions.unload_slides }/>
				<span className="gallery__close" title="Close Gallery" onClick={ () => this.closeGallery() }>
				<b className="gallery__close-srt">Close Gallery</b>
				X
				</span>
				<div className="gallery__images-closed" id="gallery__images">
					<Projector styleFor={"gallery"} slides={slides}/>
				</div>
			</div>
		)
	}
}

const stateToProps = state => {
	const { gallery, projector } = state;
	return { 
		gallery, 
		projector 
	}; 
}

const dispatchToProps = dispatch => {
	return {
 		actions: bindActionCreators(Object.assign({}, galleryActions, projectorActions), dispatch)
	}; 
}

export default connect(stateToProps, dispatchToProps)(Gallery);