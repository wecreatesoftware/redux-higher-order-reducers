import packageJson from "./package.json"
import babel from "rollup-plugin-babel"
import { terser as uglify } from "rollup-plugin-terser"

const input = "src/wecreate/software/redux.higher.order.reducers.js"
const plugins = [
    babel(),
    uglify(),
]

module.exports = [
    {
        input,
        plugins,
        output: {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
    },
    {
        input,
        plugins,
        output: {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        },
    },
    {
        input,
        plugins,
        output: {
            file: packageJson.browser,
            name: "reduxHigherOrderReducers",
            format: "iife",
            sourcemap: true,
        },
    },
]
