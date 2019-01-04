import { createVariants } from "parallel-webpack"

const createConfig = ({ libraryTarget }) => ({
    entry: "./src/wecreate/software/index.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "redux-higher-order-reducers.js",
        libraryTarget
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: [ "@babel/preset-env", "@babel/preset-react" ]
                }
            }
        ]
    }
})

module.exports = createVariants({
    libraryTarget: [ "commonjs" ]
}, createConfig)
