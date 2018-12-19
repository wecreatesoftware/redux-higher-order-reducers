import { createVariants } from "parallel-webpack"

const createConfig = ({ libraryTarget }) => ({
    entry: "./src/wecreate/software/index.js",
    target: "node",
    output: {
        path: `${__dirname}/dist`,
        filename: `redux-higher-order-reducers.${libraryTarget}.js`,
        library: "redux-higher-order-reducers",
        libraryTarget
    }
})

module.exports = createVariants({
    libraryTarget: ["commonjs2", "umd", "amd"]
}, createConfig)