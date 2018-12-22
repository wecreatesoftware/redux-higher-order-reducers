import { createVariants } from "parallel-webpack"

const createConfig = ({ libraryTarget }) => ({
    entry: "./src/wecreate/software/index.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "redux-higher-order-reducers.js",
        library: "redux-higher-order-reducers",
        libraryTarget
    }
})

module.exports = createVariants({
    libraryTarget: ["commonjs"]
}, createConfig)