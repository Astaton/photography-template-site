//React imports
import React, { Component } from 'react';

//Redux imports
import { bindActionCreators } from 'redux';

//React-Redux imports
import { connect } from 'react-redux';

//Actions import
import * as actionCreators from './actions/projector_actions';

//React Component imports
import Loader from './Loader';


class Filmstrip extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount() {
		console.log("Filmstrip mounted props are ", this.props);
	}

	handleImageLoaded(name) {
		$(`#filmstripImageLoader__${name}`).css("display", "none");
	}

	handleImageErrored(name) {
		// console.log("image error");
		$(`#filmstripImageLoader__${name}`).css("display", "block");
	}

	mapSlidesToFilmstrip(slides) {
		let mappedSlides = slides.map( ({ name, image }, index) => { 
			return (
				<div key={`filmstrip__cell-${name}`} className="filmstrip__cell"
					onClick={ () => { this.filmstripCellClickHandler(index)} }>
					<div className="filmstrip__image-wrapper">
						<img className="filmstrip__image"
							src={image} 
							alt={name}
							onLoad={this.handleImageLoaded.bind(this, name)}
							onError={this.handleImageErrored.bind(this, name)}
						>
						</img>
					</div>
					<div className="filmstrip__image-overlay" id="filmstrip__image-overlay"></div>
					<Loader loaderId={`filmstripImageLoader__${name}`}/>
				</div>
			)
		});
		return mappedSlides
	}

	filmstripCellClickHandler(slideNo) {
		this.props.store_current_slide_no(slideNo);
		this.filmstripContainerJumpShifter(slideNo*-200);
		setTimeout( () => { 
			this.props.updateSlideShow() 
		});
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
		// let travelDistance = (document.getElementById('filmstrip__container').offsetWidth - document.getElementById('projector').offsetWidth) *-1 ;
		// //box should be a multiple of 100 filmstrip cells are 200px across. If the center is not multiple of 200 and minus 100 to shift to the next cell space.
		// let projectorBoxCenter = document.getElementById('projector').offsetWidth / 2;
		// projectorBoxCenter -= (projectorBoxCenter%200);
		// travelDistance += projectorBoxCenter; 
		// let goTo = 0;
		// if(shiftTo + projectorBoxCenter <= 0){
		// 	return
		// }
		// if(shiftTo <= travelDistance){
		// 	return goTo = travelDistance;
		// }
		// goTo = shiftTo + projectorBoxCenter;
		// console.log("travelDistance is: "+travelDistance+" projectorBoxCenter is: "+projectorBoxCenter+" goTo is: "+goTo);
		// let filmstripPosition = parseInt($('#filmstrip__container').css('left'));
		// let leftArrowPosition = parseInt($('#filmstrip__control-left').css('left'));
		// let rightArrowPosition = parseInt($('#filmstrip__control-right').css('left'));
		// console.log("filmstripPosition: "+filmstripPosition+", leftArrowPosition: "+leftArrowPosition+", rightArrowPosition: "+rightArrowPosition);
		// $('#filmstrip__container').css('left', filmstripPosition + goTo);
		// $('#filmstrip__control-left').css('left', leftArrowPosition + goTo);
		// $('#filmstrip__control-right').css('left', rightArrowPosition + goTo);
	}


	filmstripLeft() {
		if(parseInt($('#filmstrip__container').css('left')) === 0 || parseInt($('#filmstrip__container').css('left'))%200 === 0){
			this.filmstripContainerShifter(200);
		}
	}


	filmstripRight() {
		if(parseInt($('#filmstrip__container').css('left')) === 0 || parseInt($('#filmstrip__container').css('left'))%200 === 0){
			this.filmstripContainerShifter(-200);
		}
	}


	highlightFilmstripControls() {
		$("#filmstrip__control-left").addClass("filmstrip__control-left--highlight");
		$("#filmstrip__control-left").removeClass("filmstrip__control-left");
		$("#filmstrip__control-right").addClass("filmstrip__control-right--highlight");
		$("#filmstrip__control-right").removeClass("filmstrip__control-right");
		setTimeout( () => {
			$("#filmstrip__control-left").addClass("filmstrip__control-left");
			$("#filmstrip__control-left").removeClass("filmstrip__control-left--highlight");
			$("#filmstrip__control-right").addClass("filmstrip__control-right");
			$("#filmstrip__control-right").removeClass("filmstrip__control-right--highlight");
		}, 500);
	}


	render() {
		let slides = this.props.slides;
		return(
			<div id="filmstrip__container" className="filmstrip__container"
				onMouseEnter={ () => this.highlightFilmstripControls()} 
			>
				{ slides ? this.mapSlidesToFilmstrip(slides) : null }
				<span id="filmstrip__control-left" 
					className="filmstrip__control-left" 
					title="Shift filmstrip to the right" 
					onClick={() => this.filmstripLeft()}>
					<b className="filmstrip__control-srt">filmstrip left arrow</b>
					<i className="fas fa-angle-left" ></i>
				</span>
				<span id="filmstrip__control-right" 
					className="filmstrip__control-right" 
					title="Shift filmstrip to the left" 
					onClick={() => this.filmstripRight()}>
					<b className="filmstrip__control-srt">filmstrip right arrow</b>
					<i className="fas fa-angle-right" ></i>
				</span>
				<div className="filmstrip__selector-cell" id="filmstrip__selector-cell">
				</div>
			</div>
		)
	}
}

const stateToProps = state => { return { projector: state.projector } };

const dispatchToProps = dispatch => { return bindActionCreators(actionCreators, dispatch) };

export default connect(stateToProps, dispatchToProps)(Filmstrip); 