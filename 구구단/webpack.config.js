const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.jsx','.js'],
    },

    entry: {
        app: './client',   
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        browsers: ['last 2 chrome versions'],
                    },
                }],
                '@babel/preset-react',
            ],
                plugins: [],
            },
        }],
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
}