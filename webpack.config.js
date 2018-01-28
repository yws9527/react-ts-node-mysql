const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: __dirname + '/dist/',
        publicPath: '/',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader', 'postcss-loader']
                })
            },
            // {
            //     test: /\.css$/,
            //     loader: "style-loader!css-loader?(modules|sourceMap)!postcss-loader"
            // },
            // {
            //     test: /\.less$/,
            //     loader: "style-loader!css-loader!less-loader|postcss-loader"
            // },
            // {
            //     test: /\.scss$/,
            //     loader: "style-loader!css-loader!sass-loader|postcss-loader"
            // },
            // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'file-loader?name=./src/others/[name].[ext]',
            },
            {
                test: [/\.(bmp|gif|jpe?g|png)/],
                loader: "file-loader"
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    externals: {
        'jquery': 'jQuery',
        $: "jquery"
    },

    plugins: [
        new ExtractTextPlugin("index.css"),
        new HtmlWebpackPlugin({
            template: 'index.html',     //需要编译的模板,可以是jade等第三方模板引擎也可以说纯html页面
            filename: 'index.html',     //最终生成的文件名,默认是index.html
            hash: true,                 //是否给所有包含的js、css文件后面添加hash值,可以用来清除缓存，但好像不是很管用
            inject: "true",             // | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
};





// module.exports = {
//     entry: "./src/index.tsx",
//     output: {
//         filename: "bundle.js",
//         path: __dirname + "/dist",
//         publicPath: '/dist/',
//         chunkFilename: '[name].[chunkhash:5].chunk.js'
//     },

//     devtool: "source-map",

//     resolve: {
//         extensions: [".ts", ".tsx", ".js", ".json"]
//     },

//     module: {
//         rules: [
//             { test: /\.tsx?$/, loader: "ts-loader" },
//             // { test: /src\/containers(\/.*).(tsx|ts)/, loader: "bundle-loader?lazy!ts-loader" },
//             { test: /\.css$/, loader: "style-loader!css-loader?modules" },
//             { test: /\.(png|jpe?g|gif)/, loader: "file-loader" },
//             { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
//         ]
//     },

//     plugins: [
//     ],
// };