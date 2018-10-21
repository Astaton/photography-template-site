//React imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//Redux imports
import { connect } from 'react-redux';

class Footer extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// console.log("Footer props are", this.props);
		this.addListeners(this.props.footer.socialMediaLinks);
	}

	//check to see if these can be added directly inline during the initial mapping of the Social Medial Links in the JSX
	addListeners(socialMediaLinksInfo) {
		socialMediaLinksInfo.forEach( ({ font_color, name, bg_color1, bg_color2 }) => {
			$(`#${name}-hover-box`).hover(() => this.hoverOn(`#${name}-social`, font_color, bg_color1, bg_color2), () => this.hoverOff(`#${name}-social`));
		});
	}

	hoverOn(id, font_color, bg_color1, bg_color2) {
		$(id).css('color', font_color);
		$(id).css('background', `linear-gradient(45deg, ${bg_color1}, ${bg_color2})`);
		$(id).toggleClass('footer__social-link--hover');
		$(id).toggleClass('footer__social-link');
	}

	hoverOff(id) {
		$(id).css('color', 'white');
		$(id).css('background', 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))');
		$(id).toggleClass('footer__social-link');
		$(id).toggleClass('footer__social-link--hover');
	}

	render(){
		return(
			<footer className="footer">
				<div className="footer__body">
					<div className="footer__artist">
						<h4 className="footer__header">Artist</h4>
						<div className="footer__artist-content-container">
							<p className="footer__text-artist">
								David Bokeh founder of Bokeh Best Photography, Is an award winning photographer with over 8 years of experience. Learn more about David and Bokeh Best Photography 
								<NavLink id="footer__artist-link" className="footer__artist-link" to="/about">
									<i> here. </i>
								</NavLink>
							</p>
						</div>
					</div>
					<div className="footer__address">
						<h4 className="footer__header">Bokeh Best Photography</h4>
						<div className="footer__address-content-container">
							<address className="footer__address">
								<p className="footer__text-address">123 Wooster St</p>
								<p className="footer__text-address"> New York, NY 10012</p>
								<a href="tel:1-212-555-5555">
									<p className="footer__text-address">(212) 555-5555</p>
								</a>
								<p className="footer__text-address"></p>
							</address>
						</div>
					</div>
					<div className="footer__social">
						<h4 className="footer__header">Social Media</h4>
						<ul className="footer__social-content-container">
							{this.props.footer.socialMediaLinks.map(({ name, link , icon}) => (
								<li key={`${name}-social`} id={`${name}-hover-box`} className='footer__social-hover-box'>
									<a href={link} target="_blank" >
										<span>
											<b className="footer__social-srt">{name}</b>
											<i className={`${icon} footer__social-link`} id={`${name}-social`} aria-hidden="true" title={name}></i>
										</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="footer__base">
					<p className="footer__base-text">&copy; Bokeh Best Photography - New York, NY</p>
				</div>
			</footer>
		)
	}
}

const stateToProps = state => {
	return {
		footer: state.footer
	}
}

export default connect(stateToProps)(Footer);