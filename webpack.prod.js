// const path = require("path");
// const webpack = require("webpack");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//
// module.exports = {
//   mode: "production",
//   entry: "./src/client/index.js",
//   output: {
//     libraryTarget: "var",
//     library: "Client",
//   },
//   optimization: {
//     minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
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
//         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./src/client/views/index.html",
//       filename: "./index.html",
//     }),
//     new MiniCssExtractPlugin({ filename: "[name].css" }),


const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');


const prod = {
  mode: "production",
  entry: ["./src/client/serviceWork.js"],
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new WorkboxPlugin.GenerateSW(),
  ],
};

module.exports = merge(common, prod);
