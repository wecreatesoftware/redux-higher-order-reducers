import packageJson from "./package.json"
import babel from "@rollup/plugin-babel"
import { terser as uglify } from "rollup-plugin-terser"

const input = "src/wecreate/software/redux.higher.order.reducers.js"

module.exports = [
    {
        input,
        output: {
            file: packageJson.main,
            format: "umd",
            name: "@wecreatesoftware/redux-higher-order-reducers",
            sourcemap: true,
        },
        plugins: [
            babel({
                babelHelpers: "bundled",
            }),
            uglify(),
        ],
    },
    {
        input,
        output: {
            file: packageJson[ "jsnext:main" ],
            format: "es",
            sourcemap: true,
        },
        plugins: [
            babel({
                babelHelpers: "bundled",
            }),
            uglify(),
        ],
    },
]
