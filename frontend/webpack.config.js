const path = require('path');
const protocolPath = path.resolve(__dirname, 'shared/protocols')

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: v => v.startsWith(protocolPath),
                loader: 'tsrpc-protocol-loader',
                options: {
                    protocolPath: protocolPath
                }
            },
            { test: /\.ts?$/, use: 'ts-loader' },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname)
    }
}