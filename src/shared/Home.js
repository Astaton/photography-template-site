//React imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//Redux imports
import { bindActionCreators } from 'redux';

//React-Redux imports
import { connect } from 'react-redux';

//CircleType import
import CircleType from 'circletype';

//Actions imports
import * as actionCreators from './actions/home_actions';

//Data imports
import homeSlides from './data/homeSlides';

//jQuery import
import $ from 'jquery';

class Home extends Component {
	constructor(props){
		super(props)
		this.updateWindowWidth = this.updateWindowWidth.bind(this);
	}

	componentDidMount() {
		this.slideShow();
		this.toggleHomeModifierOn();
		this.updateWindowWidth();
		window.addEventListener('resize', this.updateWindowWidth);
		new CircleType(document.getElementById('home__welcome-text')).radius(600);
		setTimeout( () => { console.log('Home props are: ',this.props); }, 1500 );
	}

	componentWillUnmount() {
		console.log("Unmounted Component");
		this.toggleHomeModifierOff();
		window.removeEventListener('resize', this.updateWindowWidth);
		this.stopSlideShow();
		$("#page-wrapper").css('background-image', "");
	}

	toggleHomeModifierOn() {
		$('#main').toggleClass('main--home');
		$('#main').toggleClass('main');
	}

	toggleHomeModifierOff() {
		$('#main').toggleClass('main');
		$('#main').toggleClass('main--home');
	}

	updateWindowWidth() {
		this.props.store_window_width(window.innerWidth);
	}


	slideShow() {
		let { intervalTimer } = this.props.home;
		$("#page-wrapper").css('background-image', `url(${homeSlides[0].imgSrc})`);
		//add flash-in class
		$("#home__filter-box").toggleClass("home__filter-box--flash-in");
		// $("#page-wrapper").toggleClass("page-wrapper--flash-in");
		//remove home__filter-box class
		$("#home__filter-box").toggleClass("home__filter-box");
		// $("#page-wrapper").toggleClass("page-wrapper");
		let count = 1
		console.log('slideshow starting');
		let timer = setInterval( ()=> {
			if(count == homeSlides.length){
				count = 0;
			}
			let image = homeSlides[count].imgSrc;
			if(this.props.home.pauseSlideShow == false){
				count++
				//add home__filter-box class
				$("#home__filter-box").toggleClass("home__filter-box");
				// $("#page-wrapper").toggleClass("page-wrapper");
				//remove flash-in class
				$("#home__filter-box").toggleClass("home__filter-box--flash-in");
				// $("#page-wrapper").toggleClass("page-wrapper--flash-in");
				//add flash-in class again so that the effect starts over
				setTimeout(() => { $("#home__filter-box").toggleClass("home__filter-box--flash-in"); }, 5);
				// setTimeout(() => { $("#page-wrapper").toggleClass("page-wrapper--flash-in"); }, 5);
				//remove home__filter-box class
				setTimeout(() => { $("#home__filter-box").toggleClass("home__filter-box"); }, 5);
				// setTimeout(() => { $("#page-wrapper").toggleClass("page-wrapper"); }, 5);
				$("#page-wrapper").css('background-image', `url(${image})`);
				console.log('count++ pause is: ', this.props.home.pauseSlideShow);
			}
			// count = this.checkToProceedToNextSlide(count);
			this.checkToProceedToNextSlide();
		}, 8500);
		this.props.store_timer(timer);
		console.log('stored intervalTimer is '+intervalTimer);
	}


	checkToProceedToNextSlide() {
		let { windowWidth, pauseSlideShow } = this.props.home;
		if(windowWidth < 576){
			this.props.pause_slide_show(true);
			console.log('pauseSlideShowCheck window too small stopped slideshow ', this.props.home);
		}
		if(windowWidth >= 576){
			this.props.pause_slide_show(false);
			console.log('pauseSlideShowCheck window big enough started slideshow ', this.props.home);
		}
		return
	}


	// checkToProceedToNextSlide(count) {
	// 	let { windowWidth, pauseSlideShow } = this.props.home;
	// 	if(windowWidth < 576){
	// 		console.log('checkToProceedToNextSlide window too small stopped slideshow ', this.props.home);
	// 		return count
	// 	}
	// 	if(windowWidth >= 576){
	// 		console.log('checkToProceedToNextSlide window big enough started slideshow ', this.props.home);
	// 		return count+=1
	// 	}
	// }


	stopSlideShow() {
		console.log('clearing intervalTimer '+this.props.home.intervalTimer);
		clearInterval(this.props.home.intervalTimer);
		this.props.pause_slide_show(true);
	}

	render() {
		return(
			<div id="main" className="main" >
				<div id="home__filter-box" className="home__filter-box"></div>
				<div className="home__welcome">
					<h1 id="home__welcome-text" className="home__welcome-text">
						Bokeh Best Photography
					</h1>
					<h1 id="home__welcome-text-mobile" className="home__welcome-text">
						Bokeh Best Photography
					</h1>
				</div>
			</div>
		)
	}
}


const stateToProps = (state) => {
	return {
		home: state.home
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(stateToProps, mapDispatchToProps)(Home);