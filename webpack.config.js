const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        index: './src/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "lib"),
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "env", "es2015", "stage-2", "react"
                    ],
                    plugins: [
                        [
                            "import",
                            {libraryName: "antd", style: 'css'}
                        ] //antd按需加载
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['lib'])
    ]
};
