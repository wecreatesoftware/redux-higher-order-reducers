module.exports = {
    plugins: [
        "@babel/plugin-proposal-object-rest-spread",
    ],
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false,
            },
        ],
        "@babel/preset-react",
    ],
    env: {
        test: {
            presets: [
                "@babel/preset-env",
            ],
        },
    },
}
