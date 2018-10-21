//React imports
import React, { Component } from 'react';

//Redux imports
import { bindActionCreators } from 'redux';

//React-Redux imports
import { connect } from 'react-redux';

//React Component imports
import Slide from './Slide';
import Filmstrip from './Filmstrip';
import Loader from './Loader';

//Actions import
import * as actionCreators from './actions/projector_actions';

class Projector extends Component {
	constructor(props) {
		super(props)
	}


	componentDidMount() {
		this.downArrowVisibility();
		this.props.unload_slides();
		this.props.pause_slide_show(false);
		setTimeout( () => {
			this.loadProjector();
		},50);
		setTimeout( () => {
			this.autoRunProjector();
		},100);
		
		console.log("Projector props are ", this.props);
	}


	componentDidUpdate() {
		// console.log("on update Projector props are", this.props);
	}


	componentWillUnmount() {
		clearInterval(this.props.projector.intervalTimer);
		this.props.show_filmstrip(false);
		if(!$("#projector__control-down").hasClass("projector__control-down")){
			$("#projector__control-down").toggleClass("projector__control-down--shift");
			$("#projector__control-down").toggleClass("projector__control-down--filmstrip-shift");
			$("#filmstrip_container").toggleClass("filmstrip_container--slide-in");
			$("#filmstrip_container").toggleClass("filmstrip_container");
		}
	}


	nextSlide() {
		let { currentSlideNo, slides } = this.props.projector;
		this.props.increment_slide(currentSlideNo, slides.length);
		//delayed so that redux has time to update store from increment_slide()
		setTimeout( () => { this.updateSlideShow() }, 50);
	}


	previousSlide() {
		let { currentSlideNo, slides } = this.props.projector;
		this.props.decrement_slide(currentSlideNo, slides.length);
		//delayed so that redux has time to update store from decrement_slide()
		setTimeout( () => { this.updateSlideShow() }, 50);
	}


	updateSlideShow() {
		let { slides, currentSlideNo } = this.props.projector;
		console.log("in updateSlideShow props are: ", this.props);
		this.filmstripOverlayShifter();
		this.props.store_current_slide_info(slides[currentSlideNo]);
	}


	loadProjector() {
		this.props.load_new_slides(this.props.slides);
		setTimeout( () => { 
			this.updateSlideShow(); 
		}, 50);
	}


	autoRunProjector() {
		let intervalTimer = setInterval( ()=> {
			if(this.props.projector.slides === undefined){
				this.loadProjector();
			}
			if(this.props.projector.pauseSlideShow == false){
				this.nextSlide();
			}
		},6500);
		this.props.store_timer(intervalTimer);
	}


	pauseButtonHandler() {
		let pauseSlideShow = this.props.projector.pauseSlideShow;
		if(pauseSlideShow == false){
			this.props.pause_slide_show(true);
		}else{
			this.props.pause_slide_show(false);
		}
	}


	downArrowVisibility() {
		//if container housing the projector is too small don't give the option to bring up the photo strip
		let projectorBoxWidth = document.getElementById('projector').offsetWidth;
		if(projectorBoxWidth < 750){
			$("#projector__control-down").css('display', 'none');
		}
	}


	projectorDownHandler() {
		let calculatedWidth = this.props.projector.slides.length*200+"px";
		this.props.show_filmstrip(!this.props.projector.showFilmstrip);
		setTimeout( () => { $('#filmstrip__container').css('width', calculatedWidth) }, 25);
		$("#projector__control-down").toggleClass("projector__control-down--filmstrip-shift");
		$("#projector__control-down").toggleClass("projector__control-down--shift");
		$("#filmstrip__container").toggleClass("filmstrip__container--slide-in");
		$("#filmstrip__container").toggleClass("filmstrip__container");
	}


	shiftProjectorControls() {
		//make sure modified class is not on before toggling
		if($("#projector__control-left").hasClass("projector__control-left")){
			$("#projector__control-left").toggleClass("projector__control-left--shift");
			$("#projector__control-left").toggleClass("projector__control-left");
			$("#projector__control-right").toggleClass("projector__control-right--shift");
			$("#projector__control-right").toggleClass("projector__control-right");
			$("#projector__control-pause").toggleClass("projector__control-pause--shift");
			$("#projector__control-pause").toggleClass("projector__control-pause");
				//If control-down is in use by the filmstrip leave it alone
			if(!$("#projector__control-down").hasClass("projector__control-down--filmstrip-shift")){
				$("#projector__control-down").toggleClass("projector__control-down--shift");
				$("#projector__control-down").toggleClass("projector__control-down");
			}
		}
	}


	unshiftProjectorControls() {
		//make sure modified class is on before toggling it off
		if($("#projector__control-left").hasClass("projector__control-left--shift")){
			$("#projector__control-left").toggleClass("projector__control-left");
			$("#projector__control-left").toggleClass("projector__control-left--shift");
			$("#projector__control-right").toggleClass("projector__control-right");
			$("#projector__control-right").toggleClass("projector__control-right--shift");
			$("#projector__control-pause").toggleClass("projector__control-pause");
			$("#projector__control-pause").toggleClass("projector__control-pause--shift");
			//If control-down is in use by the filmstrip leave it alone
			if(!$("#projector__control-down").hasClass("projector__control-down--filmstrip-shift")){
				$("#projector__control-down").toggleClass("projector__control-down");
				$("#projector__control-down").toggleClass("projector__control-down--shift");
			}
		}
	}


	filmstripOverlayShifter() {
		let currentSlideNo = this.props.projector.currentSlideNo;
		$("#filmstrip__selector-cell").css('left', currentSlideNo*200);
	}


	render(){
		let { currentSlideInfo, showFilmstrip, slides } = this.props.projector;
		return(
			<div id="projector" 
				className="projector" 
				onMouseEnter={ () => this.shiftProjectorControls()} 
				onMouseLeave={ () => this.unshiftProjectorControls()}
			>
				{currentSlideInfo ? 
					<Slide photoInfo={currentSlideInfo} 
						styleFor={this.props.styleFor} 
					/>
					:
					<Loader />
				}
				{slides ?
					<Filmstrip slides={slides} 
						updateSlideShow={ () => this.updateSlideShow()}
					/>
					:
					null
				}
				<span id="projector__control-left" className="projector__control-left" title="See previous photo">
					<b className="projector__control-srt">left arrow</b>
					<i className="fas fa-chevron-circle-left" onClick={() => this.previousSlide()} ></i>
				</span>
				<span id="projector__control-right" className="projector__control-right" title="See next photo">
					<b className="projector__control-srt">right arrow</b>
					<i className="fas fa-chevron-circle-right" onClick={() => this.nextSlide()} ></i>
				</span>
				<span id="projector__control-down" className="projector__control-down" title="See all photos in current gallery">
					<b className="projector__control-srt">down arrow</b>
					<i className="fas fa-chevron-circle-down" onClick={() => this.projectorDownHandler()}></i>
				</span>
				<span id="projector__control-pause" className="projector__control-pause" title="Pause slide show">
					<b className="projector__control-srt">pause arrow</b>
					<i className="fas fa-pause-circle" onClick={() => this.pauseButtonHandler()}></i>
				</span>
			</div>
		)
	}
}

const stateToProps = state => { return { projector: state.projector} }

const dispatchToProps = dispatch => { return bindActionCreators(actionCreators, dispatch) }

export default connect(stateToProps, dispatchToProps)(Projector); 