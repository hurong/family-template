const merge = require('webpack-merge');
const baseConf = require('./webpack.base.config');
const path = require('path');
const BASE_URL = process.env.baseUrl;
const PORT = process.env.port || 9000; 

module.exports = merge(baseConf, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: PORT,
    //historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join(BASE_URL ? `/${BASE_URL}/` : '', 'index.html'),
        },
      ],
    },
    proxy: {
      [`/${BASE_URL}/api`]: {
        target: 'https://tcc.taobao.com',
        changeOrigin: true,
        pathRewrite: {
          [`/${BASE_URL}/api`]: '/',
        },
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader',
        ],
      },
      {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              }
            },
            'postcss-loader',
            'less-loader',
          ],
      },      
    ]    
  }
})