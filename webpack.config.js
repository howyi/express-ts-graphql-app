const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve("src", "app.ts"),
    target: 'node',
    node: {
        // schema.graphqlのパスが相対のため、 __dirnameが/にならないようにする
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
    output: {
        filename: "app.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
};
