const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: Path.resolve(__dirname, '../static'), to: 'static' }],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: Path.resolve(__dirname, '../src/index.html'),
    }),
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    modules: [Path.resolve(__dirname, '../src'), Path.resolve(__dirname, '../node_modules')],
    alias: {
      Style: Path.resolve(__dirname, '../src/style/'),
      Store: Path.resolve(__dirname, '../src/store/'),
      Pages: Path.resolve(__dirname, '../src/pages/'),
      Hooks: Path.resolve(__dirname, '../src/hooks/'),
      Components: Path.resolve(__dirname, '../src/components/'),
      Utils: Path.resolve(__dirname, '../src/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
