import path from 'path'
import { ProgressPlugin, Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new ProgressPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}

export default config