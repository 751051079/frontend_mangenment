const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 入口文件
	entry: './src/index.tsx',
	// 输出目录和输出文件名
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	// 解析配置
	resolve: {
		// 别名配置
		alias: {
			'@': path.resolve(__dirname, 'src/')
		},
		// 解析文件的扩展名
		extensions: ['.tsx', '.ts', '.js', '.jsx']
	},
	// 模块配置
	module: {
		rules: [{
			test: /\.(ts|tsx)$/,
			exclude: /node_modules/,
			use: 'ts-loader'
		}]
	},
	// 插件配置
	plugins: [
		// 自动生成 HTML 文件，并将输出的 bundle 文件添加到 HTML 文件中
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};