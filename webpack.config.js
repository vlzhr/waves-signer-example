const path = require('path');

const main = (name, minimize) => ({
    entry: './src/index.js',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize,
        usedExports: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        library: 'dApp',
        libraryTarget: "umd",
        globalObject: "this",
        filename: name,
        path: path.resolve(__dirname, 'dist'),
    }
});

module.exports = [
    {
        ...main('dapp.js', false),
        devtool: 'inline-source-map',
        mode: "development",
    },
    {
        ...main('dapp.min.js', true)
    }
];