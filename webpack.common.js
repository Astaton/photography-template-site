const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
	entry: './src/browser/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|eot|ttf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							outputPath: '/',
							publicPath: '/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
}

const serverConfig = {
	entry: './src/server/index.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: __dirname,
		filename: 'server.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|eot|ttf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							emitFile: false,
							name: '[path][name].[ext]',
							outputPath: '/',
							publicPath: '/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
}

module.exports = [browserConfig, serverConfig];