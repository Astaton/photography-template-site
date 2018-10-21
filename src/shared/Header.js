//React imports
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

//Redux imports
import { bindActionCreators } from 'redux';

//React-Redux imports
import { connect } from 'react-redux';

//Actions imports
import * as actionCreators from './actions/header_actions';


class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			mobileMenu: false,
		}
		this.handleMenuClick = this.handleMenuClick.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	componentDidMount() {
		console.log('header props are ', this.props);

	}

	handleMouseLeave() {
		if(this.props.header.mobileMenu === true){
			this.toggleMobileMenuOut();
			this.props.mobile_header_status(false);
		}
	}

	handleMenuClick() {
		console.log('mobileMenu clicked');
		if(this.props.header.mobileMenu === true){
			this.toggleMobileMenuOut();
			this.props.mobile_header_status(false);
		} else if(this.props.header.mobileMenu === false){
			this.toggleMobileMenuIn();
			this.props.mobile_header_status(true);
		}
	}

	toggleMobileMenuIn() {
		$('#header__mobile-nav').toggleClass('header__mobile-nav--slide-in');
		$('#header__mobile-nav').toggleClass('header__mobile-nav');
	}

	toggleMobileMenuOut() {
		$('#header__mobile-nav').toggleClass('header__mobile-nav');
		$('#header__mobile-nav').toggleClass('header__mobile-nav--slide-in');
	}
 
	render() {
		return(
			<header className="header" onMouseLeave={()=> this.handleMouseLeave()}>
				<div className="header__brand-container">
					<NavLink className="header__brand-link" id="header__brand-link" exact to="/" title="Bokeh Photography Inc.">
						<img className="header__brand-logo" src={require("../../assets/logos/site-logo2.svg")} alt="Bokeh Photography Inc. logo" />
						<p className="header__brand-name">Bokeh Photography</p>
					</NavLink>
					<i className="header__mobile-menu-icon fas fa-bars" onClick={() => this.handleMenuClick()}></i>
				</div>
				<nav className="header__nav">
					<ul className="header__link-list">
						{this.props.header.linkInfo.map(({ key, path, name }) => <li key={key}> <NavLink className="header__links" exact to={path}>{name}</NavLink></li>)}
					</ul>
				</nav>
				<nav id="header__mobile-nav" className="header__mobile-nav">
					<ul className="header__mobile-link-list">
						{this.props.header.linkInfo.map(({ key, path, name }) => <li key={`mobile-${key}`}> <NavLink className="header__mobile-links" exact to={path}>{name}</NavLink></li>)}
					</ul>
				</nav>
			</header>
		)
	}
}

const stateToProps = state => { return { header: state.header } }

const dispatchToProps = dispatch => { return bindActionCreators(actionCreators, dispatch) }

export default connect(stateToProps, dispatchToProps, null, {pure:false})(Header);