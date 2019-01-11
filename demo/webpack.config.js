module.exports = {
    entry: "./demo.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: [ "env", "react" ],
                }
            }
        ]
    }
}
