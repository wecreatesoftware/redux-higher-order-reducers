import { createVariants } from "parallel-webpack"

const createConfig = ({ libraryTarget }) => ({
    entry: "./src/wecreate/software/redux.higher.order.reducers.js",
    output: {
        path: `${__dirname}/dist/${libraryTarget}`,
        library: "redux.higher.order.reducers",
        libraryTarget,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: [ "env", "react" ],
                },
            },
        ],
    },
})

module.exports = createVariants({
    libraryTarget: [
        "umd",
    ],
}, createConfig)
