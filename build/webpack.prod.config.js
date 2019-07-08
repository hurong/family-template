const merge = require('webpack-merge');
const baseConf = require('./webpack.base.config');
const path = require('path');
//4.x之后用以压缩
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
//4.x之后提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConf, {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(), //删除打包的目录
    // 分离css插件参数为提取出去的路径
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].min.css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    //压缩css
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      }
    })
  ],
  optimization: {
    // 分离chunks
    splitChunks: {
      chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial', // 只打包初始时依赖的第三方
        },
      },
    },
    minimizer: [new UglifyJSPlugin(
      {
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
          },
        },
        cache: true,
        parallel: true,
        sourceMap: false, // set to true if you want JS source maps       
      }
    )],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '../',
            },
          },
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
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader',
        ],
      },
    ]
  }
})