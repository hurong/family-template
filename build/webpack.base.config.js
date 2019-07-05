const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//将定义过的其它规则复制并应用到 .vue 文件里相应语言的块
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BASE_URL = process.env.baseUrl;
const webpack = require('webpack');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: resolve('/src/index.ts'),
  output: {
    filename: '[name].bundle.js',
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
    new CleanWebpackPlugin(), //删除打包的目录
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(BASE_URL)
    })
  ],
};