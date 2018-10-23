//React imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
		let gallery = this.props.match.params.gallery;
		console.log("on mount Gallery props are", this.props);
		if(gallery){
			this.goToGallery(gallery);
		}
	}

	componentDidUpdate() {
		// console.log("on update Gallery props are", this.props);
	}

	componentWillUnmount() {
		this.closeGallery();
	}


	goToGallery(gallery) {
		console.log("clicked goToGallery");
		this.props.actions.choose_gallery(gallery);
		this.props.actions.unload_slides();
		setTimeout( () => { 
			this.openGallery(); 
		}, 50);
	}


	openGallery() {
		console.log("Attempting to open the gallery");
		if($("#main").hasClass("main")){
			$("#main").toggleClass("main--gallery");
			$("#main").toggleClass("main");
			$("#gallerySelector__container").toggleClass("gallerySelector__container--open");
			$("#gallerySelector__container").toggleClass("gallerySelector__container");
			$("#gallery__images").toggleClass("gallery__images");
			$("#gallery__images").toggleClass("gallery__images-closed");
		}
		setTimeout( () => {
			$('html,body').animate({
				scrollTop: $("#main").offset().top
			});
		},1500);
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
		if($("#projector__control-down").hasClass("projector__control-down--filmstrip-shift")){
			$("#projector__control-down").toggleClass("projector__control-down--filmstrip-shift");
		}
		if($("#projector__control-down").hasClass("projector__control-down--shift")){
			$("#projector__control-down").toggleClass("projector__control-down--shift");
		}
		if(!$("#projector__control-down").hasClass("projector__control-down")){
			$("#projector__control-down").toggleClass("projector__control-down");
		}
		console.log("attempting push to history");
		// withRouter( ({ history }) => { history.push('/gallery') } );
	}


	//choose_gallery={ this.props.actions.choose_gallery }
	render(){
		const Close = withRouter( ({ history }) => (
		<span className="gallery__close" 
			title="Close Gallery" 
			onClick={ () => { 
				this.closeGallery(); 
				history.push('/gallery');
			}}
		>
			<b className="gallery__close-srt">Close Gallery</b>
			X
		</span>
		));
		let slides = this.props.gallery.slides;
		return(
			<div className="main" id="main">
				<GallerySelector goToGallery={ this.goToGallery }/>
				<Close />
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