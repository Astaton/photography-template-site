//React imports
import React, { Component } from 'react';

//Rect Component imports
import Loader from './Loader';


class Slide extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.setStyles();
	}

	componentWillUnmount() {
		this.removeStyles();
	}

	setStyles() {
		let { name } = this.props.photoInfo;
		let styleFor = this.props.styleFor;
		//set styles for the frame
		$(`#${name}-slide__frame`).toggleClass(`slide__frame--${styleFor}`);
		$(`#${name}-slide__frame`).toggleClass(`slide__frame`);
		//set styles for the photo
		$(`#${name}-slide__photo`).toggleClass(`slide__photo--${styleFor}`);
		$(`#${name}-slide__photo`).toggleClass(`slide__photo`);
	}

	removeStyles() {
		let { name } = this.props.photoInfo;
		let { styleFor } = this.props.styleFor;
		//set styles for the frame
		$(`#${name}-slide__frame`).toggleClass(`slide__frame`);
		$(`#${name}-slide__frame`).toggleClass(`slide__frame--${styleFor}`);
		//set styles for the photo
		$(`#${name}-slide__photo`).toggleClass(`slide__photo`);
		$(`#${name}-slide__photo`).toggleClass(`slide__photo--${styleFor}`);
	}

	handleImageLoaded() {
		$("#slide__loader").css("display", "none");
	}

	handleImageErrored() {
		$("#slide__loader").css("display", "block");
	}

	render() {
		let { name, image } = this.props.photoInfo;
		return(
			<div id={`${name}-slide__frame`} className="slide__frame">
				<img id={`${name}-slide__photo`} className="slide__photo" 
					src={image}  
					onLoad={this.handleImageLoaded.bind(this)} 
					onError={this.handleImageErrored.bind(this)}
				>
				</img>
				<Loader loaderId={"slide__loader"}/>
			</div>
		)
	}
}


export default Slide;