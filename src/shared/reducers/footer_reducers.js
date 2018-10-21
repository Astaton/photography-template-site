const initialState = {
	socialMediaLinks : [
				{ 
					name: "FaceBook", 
					link: "https://www.facebook.com/bokehbestphotography",
					icon: "fab fa-facebook-square",
					font_color: "#FFFFFF",
					bg_color1: "#3B5998",
					bg_color2: "#245acd"
				},
				{
					name: "Flickr", 
					link: "https://www.flickr.com/photos/david_bokeh/",
					icon: "fab fa-flickr",
					font_color: "#FFFFFF",
					bg_color1: "#FE0883",
					bg_color2: "#128fdc"
				},
				{
					name: "Instagram", 
					link: "https://www.instagram.com/bokehbestphotography/",
					icon: "fab fa-instagram",
					font_color: "#FFFFFF",
					bg_color1: "#f17530",
					bg_color2: "#7a38ab"
				},
				{
					name: "LinkedIn", 
					link: "https://www.linkedin.com/in/davidbokeh/",
					icon: "fab fa-linkedin",
					font_color: "#FFFFFF",
					bg_color1: "#0077b5",
					bg_color2: "#56b9ee"
				}
			]
}

function footer_reducers(state=initialState, action) {
	switch(action.type) {
		case ('SET_FOOTER_LINKS'):
			let links = action.links;
			return {...state, links};
		default:
			return state;
	}
}

export default footer_reducers;