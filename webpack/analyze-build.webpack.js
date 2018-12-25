
const path = require('path');
const Webpack = require('webpack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const SRC_DIR = path.normalize(__dirname + '/../src');
const DIST_DIR = path.normalize(__dirname + '/../dist');

const plugins = [
	new BundleAnalyzerPlugin(),
	new Webpack.optimize.UglifyJsPlugin(
		{
			mangle: true,
			compress: {},
			output: {
				beautify: true,
				comments: false,
			},
		}
	),
];

const CONFIG = {
	entry: {
		'daypack.js': [ './src/' ],
	},
	output: {
		path: DIST_DIR,
		filename: '[name]',
		libraryTarget: 'umd',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015'],
				},
			},
		],
	},
	resolve: {
		extensions: [ '', '.js' ],
		root: [ SRC_DIR ],
	},
	stats: {
		color: true,
		children: false,
		chunkModules: false,
	},
	plugins,
};


module.exports = CONFIG;
