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

    performance: {
        maxEntrypointSize: 1000000,
        maxAssetSize: 1000000,
    },
    devtool: "source-map",
};

module.exports = app;