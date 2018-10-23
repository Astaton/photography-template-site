//React imports
import React, { Component } from 'react';

//Redux imports
import { bindActionCreators } from 'redux';

//React-Redux imports
import { connect } from 'react-redux';

//React Component imports
import Projector from './Projector';

//Actions import
import * as aboutActions from './actions/about_actions';
import * as projectorActions from './actions/projector_actions';

class About extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.toggleAboutModifierOn()
		console.log('About props are', this.props);
	}

	componentWillUnmount() {
		this.toggleAboutModifierOff()
	}

	toggleAboutModifierOn() {
		$('#main').toggleClass('main--about');
		$('#main').toggleClass('main');
	}

	toggleAboutModifierOff() {
		$('#main').toggleClass('main');
		$('#main').toggleClass('main--about');
	}

	render() {
		let slides = this.props.about.slides;
		return(
			<div id="main" className="main">
				<h1 className="about__page-header">Our Story</h1>
				<div className="about__container">
					<div className="about__images">
						<Projector styleFor={"about"} slides={slides}/>
					</div>
					<p className="about__text">
						<span className="about__section-header">David Bokeh </span>
						is a sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Kidney beans ostrich trucks. In the straw rain barrels. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees.
					</p>
					<p className="about__text">
						<span className="about__section-header">Bokeh Best Photography </span>
						is well known for rakes plows. John Deere bees, parsley sweet corn at, porky pig shovels. veterinarian blue berries cattle jelly canning. Blue berries pigeons buzz and bean prairie dogs nails at est. Quack hammers eggplant is utters nails garden. . Augers oats hen cowpies. Apples duck.
					</p>
					<p className="about__text">
						<span className="about__section-header">Our Work </span>
						is straw, quail a ostriches donkey, hay hook cucumbers. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Shovels at rakes plows. Quack hammers eggplant is utters nails garden. Haybine carrots soybeans, owls duck raising or, cheep in plows. Outhouse at nails mower. Forage Harvester, bean and Silag.
					</p>
					<ul className="about__list">
						<span className="about__section-header">Awards </span>
						<li>Cultivator brussel sprouts harrows, celery dread with kale augers harrows. Veterinarian at Seeder eggs with watermelon ostriches.</li>
						<li>Coo with rabbits ect. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Lamb pig rooster sheep. Utters are weathervane foal est. </li>
						<li>Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Rooster celery pineapples fertilizer.</li>
					</ul>
				</div>
			</div>
		)
	}
}

const stateToProps = state => {
	const { about, projector } = state;
	return { 
		about, 
		projector 
	}; 
}

const dispatchToProps = dispatch => {
	return {
 		actions: bindActionCreators(Object.assign({}, aboutActions, projectorActions), dispatch)
	}; 
}


export default connect(stateToProps, dispatchToProps)(About);