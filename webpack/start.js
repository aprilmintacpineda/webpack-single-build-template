/** @format */

require('dotenv').config();

const config = require('./baseConfig')();

config.mode = 'development';
config.devtool = 'inline-source-map',
config.devServer = {
  host: process.env.HOST,
  port: process.env.PORT,
  open: true,
  hot: true,
  overlay: true,
  open: true,
  writeToDisk: true,
  compress: true,
  publicPath: process.env.PUBLIC_PATH,
  openPage: process.env.PUBLIC_PATH,
  https: process.env.HTTPS === 'true'
};

module.exports = config;
