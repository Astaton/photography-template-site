export function add_photo(name, image, currentSlides) {
	return {
		type: 'ADD_PHOTO',
		currentSlides,
		photoInfo: {
			name,
			image
		}
	}
}