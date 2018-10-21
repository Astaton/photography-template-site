export function store_message(message) {
	return {
		type: 'STORE_MESSAGE',
		message
	}
}

export function redirect_check(redirect) {
	return {
		type: 'REDIRECT_CHECK',
		redirect
	}
}