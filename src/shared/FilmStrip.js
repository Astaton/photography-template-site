//React imports
import React, { Component } from 'react';

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
		let mappedSlides = slides.map( ({ name, image }) => { 
			return (
				<div key={`filmstrip__cell-${name}`} className="filmstrip__cell">
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

	filmstripContainerShifter(shiftBy) {
		let travelDistance = document.getElementById('filmstrip__container').offsetWidth -document.getElementById('projector').offsetWidth;
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


	filmstripLeft() {
		this.filmstripContainerShifter(200);
	}

	filmstripRight() {
		this.filmstripContainerShifter(-200);
	}


	render() {
		let slides = this.props.slides;
		return(
			<div id="filmstrip__container" className="filmstrip__container">
				{ slides ? this.mapSlidesToFilmstrip(slides) : null }
				<span id="filmstrip__control-left" className="filmstrip__control-left">
					<b className="filmstrip__control-srt">filmstrip left</b>
					<i className="fas fa-angle-left" onClick={() => this.filmstripLeft()} ></i>
				</span>
				<span id="filmstrip__control-right" className="filmstrip__control-right">
					<b className="filmstrip__control-srt">filmstrip right</b>
					<i className="fas fa-angle-right" onClick={() => this.filmstripRight()} ></i>
				</span>
				<div className="filmstrip__selector-cell" id="filmstrip__selector-cell">
				</div>
			</div>
		)
	}
}

export default Filmstrip;