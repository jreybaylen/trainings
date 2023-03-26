import { resolve } from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration = {
    watch: true,
    mode: 'development',
    entry: './src/index.tsx',
    resolve: {
        alias: {
            '@assets': resolve(__dirname, 'src/assets'),
            '@components': resolve(__dirname, 'src/components'),
            '@config': resolve(__dirname, 'src/config'),
            '@containers': resolve(__dirname, 'src/containers'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@interfaces': resolve(__dirname, 'src/interfaces'),
            "@pages": resolve(__dirname, 'src/pages'),
            '@redux': resolve(__dirname, 'src/redux'),
            '@template': resolve(__dirname, 'src/template'),
            '@utils': resolve(__dirname, 'src/utils')
        },
        extensions: [
            '.ts', '.tsx', '.js'
        ]
    },
    output: {
        clean: true,
        filename: 'bundle.js',
        path: resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            minify: true,
            inject: false,
            filename: 'index.html',
            template: 'src/template/index.ejs',
            templateParameters: {
                title: 'React Application'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.ejs$/i,
                loader: 'ejs-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.tsx?$/i,
                use: [ 'ts-loader' ]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'img',
                            outputPath: 'img'
                        }
                    }
                ]
            }
        ]
    }
}

export default config