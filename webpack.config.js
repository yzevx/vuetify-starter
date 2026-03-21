const path = require('node:path');
const DotenvPlugin = require('dotenv-webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { VuetifyPlugin, transformAssetUrls } = require('webpack-plugin-vuetify');

module.exports = {
  entry: path.join(process.cwd(), 'src/main.js'),
  output: {
    clean: true,
    filename: 'bundle.js',
    hashFunction: 'md5'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'vue-loader',
        options: { transformAssetUrls }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new DotenvPlugin({ expand: true }), new VueLoaderPlugin(), new VuetifyPlugin()],
  resolve: {
    alias: {
      '@': path.join(process.cwd(), 'src')
    },
    extensions: ['.html', '.js']
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(process.cwd(), 'dist')
    },
    historyApiFallback: true
  },
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/
  }
};
