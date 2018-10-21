import React from 'react';

const ContactForm = ()=>{
	return(
		<div className='messenger__container'>
			<form className='messenger__form' method='post' action=''>
				<input name='name' type='text' className='messenger__input-name' id='inputName' placeholder='Name (required)' required></input>
				<input name='number' type='text' className='messenger__input-number' id='inputNumber' placeholder='Number'></input>
				<input name='email' type='text' className='messenger__input-email' id='inputEmail' placeholder='Email (required)' required></input>
				<textarea name='message' className='messenger__input-message' id='inputMessage' placeholder='Message  (required)' required></textarea>
				<input type='submit' id='messenger__send' className='messenger__button' value='Send Message' ></input>
			</form>
		</div>
	)
}

export default ContactForm;