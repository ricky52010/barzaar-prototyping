'use strict';

var Path = require('path');
var webpack= require('webpack');

module.exports= {
  entry: {
    app: Path.resolve(__dirname, 'app/boot-client.jsx'),
    vendors: [
      'react', 'react-dom', 'redux', 'react-redux', 'react-router', 'classnames'
    ]
  },
  output: {
		path: Path.resolve(__dirname, 'public/js'),
		filename: '[name].js'
	},
  resolve: {
		extensions: ['', '.js','jsx', '.css', '.scss']
	},
  module: {
		loaders: [
			// { test: /\.scss$/, loaders: ["style", "css", "sass"]},
			{ test: /\.jsx?$/, loader: 'babel', query: {stage: 0}}
		],
		noParse: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'classnames']
	},
  plugins:[
		//new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
	]
}