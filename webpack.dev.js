// const path = require("path");
// const webpack = require("webpack");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
//
// module.exports = {
//   mode: "development",
//   devtool: "source-map",
//   entry: "./src/client/index.js",
//   output: {
//     libraryTarget: "var",
//     library: "Client",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.scss$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./src/client/views/index.html",
//       filename: "./index.html",
//     }),
//     new CleanWebpackPlugin({
//       dry: true,
//       verbose: true,
//       cleanStaleWebpackAssets: true,
//       protectWebpackAssets: false,
//     }),
//     new BundleAnalyzerPlugin(),
//   ],
// };

const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common');

const dev = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new BundleAnalyzerPlugin(),
    new ESLintPlugin(),
  ],
};

module.exports = merge(common, dev);
