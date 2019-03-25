const argv = require("yargs-parser")(process.argv.slice(2));
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
    module : {
        rules : [
            {
                test : /\.(jsx|js)$/,
                use : "babel-loader",
                exclude : path.join(__dirname,'node_modules'),
            }
        ]
    },
    /* resolve : {
        extensions : ['','.js','.jsx']
    }, */
    plugins : [
        new HtmlWebpackPlugin({
            filename : "./index.html",
            template : "index.html",
        }),
        new CleanWebpackPlugin()
    ]
}