const path = require('path');

module.exports = {
    entry: './src/componente.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'packagename.min.js',
        libraryTarget: 'umd',
        library: 'libraryName',
        umdNamedDefine: true
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "esmodules": false
                                    }
                                }
                            ],
                            '@babel/preset-react'
                        ],
                        plugins: ['@babel/plugin-transform-classes']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    externals: {
        vue: 'vue'
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
    // this hides a lot of useless info
    stats: {
        errorDetails: true,
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
            green: '\u001b[32m'
        }
    }
}