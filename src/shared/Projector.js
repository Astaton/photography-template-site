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
		this.filmstripContainerShifter = this.filmstripContainerShifter.bind(this);
		this.filmstripContainerJumpShifter = this.filmstripContainerJumpShifter.bind(this);
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
		let halfSecCounter = 0;
		let intervalTimer = setInterval( ()=> {
			if(this.props.projector.slides === undefined){
				this.loadProjector();
			}
			halfSecCounter += 500;
			if(this.props.projector.pauseSlideShow == false && halfSecCounter >= 6500){
				this.nextSlide();
				halfSecCounter = 0;
			}
		},500);
		this.props.store_timer(intervalTimer);
	}


	pauseButtonHandler() {
		let pauseSlideShow = this.props.projector.pauseSlideShow;
		if(pauseSlideShow == false){
			this.props.pause_slide_show(true);
			$("#projector__control-pause-icon").addClass("projector__control-pause-icon--hidden");
			$("#projector__control-pause-icon").removeClass("projector__control-pause-icon");
			$("#projector__control-play-icon").addClass("projector__control-play-icon");
			$("#projector__control-play-icon").removeClass("projector__control-play-icon--hidden");
		}else{
			this.props.pause_slide_show(false);
			$("#projector__control-pause-icon").addClass("projector__control-pause-icon");
			$("#projector__control-pause-icon").removeClass("projector__control-pause-icon--hidden");
			$("#projector__control-play-icon").addClass("projector__control-play-icon--hidden");
			$("#projector__control-play-icon").removeClass("projector__control-play-icon");
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
		setTimeout( () => { 
			$('#filmstrip__container').css('width', calculatedWidth);
			this.filmstripContainerJumpShifter(); 
		}, 25);
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


	filmstripContainerShifter(shiftBy) {
		let travelDistance = document.getElementById('filmstrip__container').offsetWidth -document.getElementById('projector').offsetWidth;
		// console.log(document.getElementById('filmstrip__container').offsetWidth);
		let proposedPosition = parseInt($('#filmstrip__container').css('left')) + shiftBy;
		if(travelDistance <= 0 || proposedPosition > 0 || travelDistance + proposedPosition < 0){
			return
		}
		let filmstripPosition = parseInt($('#filmstrip__container').css('left'));
		let leftArrowPosition = parseInt($('#filmstrip__control-left').css('left'));
		let rightArrowPosition = parseInt($('#filmstrip__control-right').css('left'));
		$('#filmstrip__container').css('left', filmstripPosition + shiftBy);
		$('#filmstrip__control-left').css('left', leftArrowPosition + (shiftBy*-1));
		$('#filmstrip__control-right').css('left', rightArrowPosition + (shiftBy*-1));
	}
	

	filmstripContainerJumpShifter(shiftTo) {
		console.log("shiftTo is: "+shiftTo);
		if(shiftTo === undefined){
			shiftTo = this.props.projector.currentSlideNo * -200;
			console.log("undefined shiftTo, setting shiftTo", shiftTo);
		}
		let projectorDisplayWidth = document.getElementById('projector').offsetWidth;
		let projectorBoxCenter = projectorDisplayWidth/2 - (projectorDisplayWidth/2)%200;
		let filmstripWidth = document.getElementById('filmstrip__container').offsetWidth;
		let rightArrowWidth = document.getElementById('filmstrip__control-right').offsetWidth;
		let travelDistance = (filmstripWidth*-1)  + projectorDisplayWidth;
		let leftArrowOffset = 8;
		let rightArrowOffset = projectorDisplayWidth - (rightArrowWidth + 8);
		let filmstripOffset = 0;
		let centerCell = shiftTo + projectorBoxCenter;
		if(travelDistance >= 0){
			console.log("travelDistance");
			return
		} 
		if(centerCell >= 0){
			console.log("centerCell");
			$('#filmstrip__container').css('left', filmstripOffset);
			$('#filmstrip__control-left').css('left', leftArrowOffset);
			$('#filmstrip__control-right').css('left',  rightArrowOffset);
			return
		}
		if(centerCell <= travelDistance){
			$('#filmstrip__container').css('left', travelDistance);
			$('#filmstrip__control-left').css('left', (travelDistance*-1) + leftArrowOffset);
			$('#filmstrip__control-right').css('left', (travelDistance*-1) + rightArrowOffset);
			return
		}
		$('#filmstrip__container').css('left', centerCell);
		$('#filmstrip__control-left').css('left', (centerCell*-1) + leftArrowOffset);
		$('#filmstrip__control-right').css('left', (centerCell*-1) + rightArrowOffset);
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
						updateSlideShow={ () => this.updateSlideShow() }
						filmstripContainerShifter={ this.filmstripContainerShifter }
						filmstripContainerJumpShifter={ this.filmstripContainerJumpShifter }
					/>
					:
					null
				}
				<span id="projector__control-left" 
					className="projector__control-left" 
					title="See previous photo"
					onClick={() => this.previousSlide()}
					>
					<b className="projector__control-srt">left arrow</b>
					<i className="fas fa-chevron-circle-left" ></i>
				</span>
				<span id="projector__control-right" 
					className="projector__control-right" 
					title="See next photo"
					onClick={() => this.nextSlide()}
					>
					<b className="projector__control-srt">right arrow</b>
					<i className="fas fa-chevron-circle-right" ></i>
				</span>
				<span id="projector__control-down" 
					className="projector__control-down" 
					title="See all photos in current gallery"
					onClick={() => this.projectorDownHandler()}
				>
					<b className="projector__control-srt">down arrow</b>
					<i className="fas fa-chevron-circle-down" ></i>
				</span>
				<span id="projector__control-pause" 
					className="projector__control-pause" 
					title="Pause/Play slide show" 
					onClick={() => this.pauseButtonHandler()}
				>
					<b className="projector__control-srt">pause arrow</b>
					<div className="projector__controls-pause-play-icon-wrapper">
						<i id="projector__control-pause-icon" className="fas fa-pause-circle projector__control-pause-icon"></i>
						<i id="projector__control-play-icon" className="fas fa-play-circle projector__control-play-icon--hidden"></i>
					</div>
				</span>
			</div>
		)
	}
}

const stateToProps = state => { return { projector: state.projector} }

const dispatchToProps = dispatch => { return bindActionCreators(actionCreators, dispatch) }

export default connect(stateToProps, dispatchToProps)(Projector); 