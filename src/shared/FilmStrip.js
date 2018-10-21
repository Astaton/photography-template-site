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
					<Loader loaderId={`filmstripImageLoader__${name}`}/>
				</div>
			)
		});
		return mappedSlides
	}

	filmstripLeft() {
		console.log("shifted filmstrip left")
	}

	filmstripRight() {
		console.log("shifted filmstrip right")
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
			</div>
		)
	}
}

export default Filmstrip;