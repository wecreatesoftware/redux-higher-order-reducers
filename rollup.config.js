import babel from "rollup-plugin-babel"
import { main as file } from "./package.json"
import { terser as uglify } from "rollup-plugin-terser"

module.exports = {
    input: "src/wecreate/software/redux.higher.order.reducers.js",
    output: {
        file,
        format: "umd",
        name: "redux-higher-order-reducers",
        sourcemap: true
    },
    plugins: [
        babel({
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
        }),
        uglify(),
    ],
}
