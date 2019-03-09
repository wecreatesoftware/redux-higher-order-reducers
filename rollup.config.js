import packageJson from "./package.json"

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
    },
    {
        input,
        output: {
            file: packageJson[ "jsnext:main" ],
            format: "es",
            sourcemap: true,
        },
    },
]
