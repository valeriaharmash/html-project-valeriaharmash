const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	target: 'node',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		port: 3000
	},
	externals: [nodeExternals()]
}
