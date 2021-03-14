const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        hotOnly: true,
        open: true,
        historyApiFallback: true,
        compress: true
    },
    devtool: 'source-map',
    output: {
        publicPath: '/',
        // 指定打包后输出的文件名
        filename: 'js/app.[contenthash:10].js',
        // 指定打包后输出的目录
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: 'demo', template: 'public/index.html' }),
        new ESLintPlugin({
            fix: true,
            extensions: ['js', 'json', 'coffee'],
            exclude: '/node_modules/'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'src': path.resolve(__dirname, 'src'),
            'pages': path.resolve(__dirname, 'src/pages'),
            'tools': path.resolve(__dirname, 'src/tools'),
        },
        // 需要打包的文件后缀
        extensions: ['.js', '.jsx']
    }
}
