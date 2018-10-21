//React Components
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//Redux imports
import { bindActionCreators } from 'redux';

//React-Redux imports
import { connect } from 'react-redux';

//React Components imports
import ContactForm from './ContactForm';
import Loader from './Loader';

//Actions imports
import * as actionCreators from './actions/contact_actions';



class Contact extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.confirmMessageBox();
		//timeout needed for redirect to style main properly.
		setTimeout( () => {
			this.toggleContactModifierOn();
		},50);
		this.toggleLoaderStyles();
		this.redirectAfterSendMessage();
		console.log('Contact props is: ', this.props);
	}


	componentWillUnmount() {
		this.toggleContactModifierOff();
		this.toggleLoaderStyles();
		console.log("unmounting Contact");
		this.props.redirect_check(false);
	}


	redirectAfterSendMessage() {
		if(this.props.match.params.status){
			console.log('Hey this worked redirecting');
			setTimeout( () => {
				this.props.redirect_check(true);
			},3500);
		} else {
			console.log('Hey this may not have worked setting redirect to false');
			setTimeout( () => {
				this.props.redirect_check(false);
			},3500);
		}
	}


	confirmMessageBox() {
		//checks status of sent messages and displays a notice accordingly
		console.log("start confirmMessageBox")
		let status = this.props.match.params.status;
		if(status){
			if(status === 'success'){
				this.props.store_message(['Message Sent!!', 'I\'ll get back to you soon.']);
				console.log("props after success ", this.props.contact.message);
			}else{
				this.props.store_message(['Message Error!!', 'Please try again later.']);
				setTimeout( () => { console.log("props after fail ", this.props.contact); }, 1000); 
			}
			setTimeout( () => {
				$('#confirm__container').toggleClass('confirm__container--drop-in');
				$('#confirm__container').toggleClass('confirm__container');
			}, 750);
			setTimeout( () => { 
				$('#confirm__container').toggleClass('confirm__container');
				$('#confirm__container').toggleClass('confirm__container--drop-in');
			}, 6000);
		}
	}


	toggleContactModifierOn() {
		if($('#main').hasClass('main') === true){
			$('#main').toggleClass('main--contact');
			$('#main').toggleClass('main');
		}
	}


	toggleContactModifierOff() {
		if($('#main').hasClass('main--contact') === true){
			$('#main').toggleClass('main');
			$('#main').toggleClass('main--contact');
		}
	}


	toggleLoaderStyles() {
		$('#loader__container').toggleClass('confirm-loader__container');
		$('#logo-loader1').toggleClass('confirm-loader__logo');
		$('#logo-loader2').toggleClass('confirm-loader__logo');
	}


	render(){
		if(this.props.contact.redirect === true){
			return <Redirect to='/contact' />
		}
		return(
			<div className='main' id="main">
				{this.props.match.params.status ?
					<div id="confirm__container" className='confirm__container'>
						<div className='confirm__inner'>
						<h2 className='confirm__header'>{this.props.contact.message[0]}</h2>
						<Loader />
						<h3 className='confirm__text'>{this.props.contact.message[1]}</h3>
						</div>
					</div>
				:
					null  
				}
				<div className="contact__info-outter-container">
					<div className="contact__info-inner-container">
						<h1 className='contact__header'>Get In Touch With Us</h1>
						<div className="contact__text-container">
							<p>If you're thinking about hiring a photographer for a shoot, we would love to discuss it with you.  We can provide professional insight and help to make your dream shoot a reality.  Consulations are completely free.</p>
						</div>
						<div className='contact__address-container'>
							<address className="contact__address-text">
								<p>
									<span className="contact__address-icons fas fa-map-marker-alt"></span> &nbsp;
									<span className="contact__srt"> Address </span>
									123 Wooster St - New York, NY 10012
								</p>
								<p>
									<span className="contact__address-icons far fa-envelope"></span> &nbsp;
									<span className="contact__srt"> Email </span>
									DBokeh@BokehBest.com
								</p>
								<p>
									<span className="contact__address-icons fas fa-phone"></span> &nbsp;
									<span className="contact__srt"> Phone </span>
									(212) 555-5555
								</p>
							</address>
						</div>
					</div>	
				</div>
				<div className='contact__message-container'>
					<ContactForm />
				</div>
			</div>
		)
	}

}

const stateToProps = state => { return { contact: state.contact } }

const dispatchToProps = dispatch => { return bindActionCreators(actionCreators, dispatch) }

export default connect(stateToProps, dispatchToProps)(Contact);