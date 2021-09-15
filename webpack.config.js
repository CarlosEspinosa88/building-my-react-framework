const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;
const distPath = 'dist';
 
const indextInput = './src/index.html';
const indexOutput = 'index.html';

const webpackDevConfig = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    clean: true,
    pathinfo: false,
    path: path.join(basePath, distPath),
    filename: '[chunkhash][name].js'
  },
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
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
        test: /\.html$/,
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
    })
  ],
  devtool: 'eval',
};

module.exports = webpackDevConfig;
