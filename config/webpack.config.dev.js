const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../webpack.config');
config.devServer = {
    port: 3000,
    // open: true
    hot: true,
    inline: true,
    progress: true,
}
config.plugins.push( new webpack.HotModuleReplacementPlugin() );

module.exports = config;
