const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//---------------------
//use different optimizer
//---------------------
// const plugins = [
// 	(async () => {
// 	    await imagemin(['assets/images/*.{jpg,png,svg}'], 'assets/images', {
// 	        use: [
// 	            imageminJpegtran({progressive: true}),
// 	            imageminOptipng({optimizationLevel: 5}),
// 	            imageminSvgo({removeViewBox: true})
// 	        ]
// 	    }); 
// 	    console.log('images optimized');
// 	}),
// 	(async () => {
// 	    await imagemin(['assets/logos/*.{jpg,png,svg}'], 'assets/logos', {
// 	        use: [
// 	            imageminJpegtran(),
// 	            imageminOptipng({optimizationLevel: 5}),
// 	            imageminSvgo({removeViewBox: true})
// 	        ]
// 	    }); 
// 	    console.log('images optimized');
// 	})
// ];

const prodBrowserConfig = {
	output: {
		filename: 'bundle.min.js',
	},
	mode: 'production'
}

const prodServerConfig = {
	mode: 'production'
}

module.exports = [merge(common[0], prodBrowserConfig), merge(common[1], prodServerConfig)];