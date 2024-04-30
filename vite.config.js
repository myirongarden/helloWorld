const path = require('path')

export default {
    root: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~jquery': path.resolve(__dirname, 'node_modules/jquery'),
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        local: 'http://localhost:8080',
        port: '8080',
        hot: true
    },
    build: {
        outDir: path.resolve(__dirname, ''),
    },
}