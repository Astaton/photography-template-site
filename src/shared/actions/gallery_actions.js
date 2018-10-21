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

export function choose_gallery(gallery) {
	return {
		type: 'CHOOSE_GALLERY',
		gallery
	}
}