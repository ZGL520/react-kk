const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm


module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath:'/'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/,exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.svg$/, loader: 'svg-sprite-loader',
                include: [
                    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
                    // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 自己私人的 svg 存放目录
                ]}
        ],
    },
    devServer:{
        historyApiFallback:true
    },
    resolve: {
        modules: [path.resolve(__dirname, "/"), "node_modules"],
        extensions: ['.web.js', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'app/index.html'})
    ]
};