const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//将定义过的其它规则复制并应用到 .vue 文件里相应语言的块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BASE_URL = process.env.baseUrl;
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: resolve('/src/index.ts'),
  output: {
    filename: isProd ? '[name].[hash:8].bundle.js' : '[name].bundle.js',
    path: resolve('dist'),
    publicPath: BASE_URL ? `/${BASE_URL}/` : '',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue', '.css', '.scss', '.less'],
    alias: {
      "@": resolve('src'),
      vue: 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: [resolve('src')],
        loader: "babel-loader",
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'index.html',// 引入模板
      filename: 'index.html',
      minify: { // 对index.html压缩
        collapseWhitespace: isProd, // 去掉index.html的空格
        removeAttributeQuotes: isProd, // 去掉引号
      },
      hash: true,// 去掉上次浏览器的缓存（使浏览器每次获取到的是最新的html）
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(BASE_URL)
    })
  ],
};