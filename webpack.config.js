const HtmlWebPackPlugin    = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");



module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,  // apuntar a todos los archivos HTML | exprecion regular => buscar si un string hace match
                loader: 'html-loader',
                options:{
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader' 
            },
        ]
    },

    optimization: {},

    plugins:[
        new HtmlWebPackPlugin(
            {
                title: 'Mi webpack App',
                template: './src/index.html'
            }),

            new MiniCssExtractPlugin({
                filename: '[name].css', // navegador web no mantiene el cache del estilo 
                ignoreOrder: false
            }),
            new CopyPlugin({
                patterns: [
                    {from: 'src/assets', to: 'assets/'}
                ]
            }),
    ]
}