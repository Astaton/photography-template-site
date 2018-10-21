const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const devBrowserConfig = {
	output: {
		filename: 'bundle.js'
	},
	mode: 'development',
	devtool: 'inline-source-map'
}

const devServerConfig = {
	mode: 'development',
	devtool: 'inline-source-map'
}

module.exports =  [merge(common[0], devBrowserConfig), merge(common[1], devServerConfig)];