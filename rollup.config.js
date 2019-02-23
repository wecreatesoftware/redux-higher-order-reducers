import babel from "rollup-plugin-babel"
import packageJson from "./package.json"

const input = "src/wecreate/software/redux.higher.order.reducers.js"
const babelOptions = {
    plugins: [
        "external-helpers",
        "transform-object-rest-spread",
    ],
    presets: [
        [
            "env", { modules: false },
        ],
        "react",
    ],
    exclude: "node_modules/**",
    babelrc: false,
}

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
            babel(babelOptions),
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
            babel(babelOptions),
        ],
    },
]
