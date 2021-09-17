const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;
const distPath = 'dist';
 
const indextInput = './src/index.html';
const indexOutput = 'index.html';

const webpackProdConfig = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    clean: true,
    publicPath: '/',
    path: path.join(basePath, distPath),
    filename: '[chunkhash][name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput, 
      template: indextInput,
      hash: true,
    })
  ],
  devtool: 'source-map',
};

module.exports = webpackProdConfig;
