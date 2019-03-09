module.exports = {
    entry: "./src/wecreate/software/redux.higher.order.reducers.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            },
        ],
    },
}
