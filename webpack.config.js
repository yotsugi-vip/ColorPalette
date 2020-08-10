const path = require("path");

/**@type {import('webpack').Configuration} */
const app = {
    mode: "production",
    entry: "./src/view/app/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "Viewer")
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    devtool: "source-map",
}

module.exports = app;