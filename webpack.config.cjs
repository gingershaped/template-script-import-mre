const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
    mode: "development",
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                index: "src/index/index.hbs"
            },
            preprocessor: "handlebars",
            preprocessorOptions: {
                partials: ["src/templates/"]
            }
        })
    ]
};