import packageJson from "./package.json"
import babel from "rollup-plugin-babel"

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
            babel(),
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
            babel(),
        ],
    },
]
