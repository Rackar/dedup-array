
module.exports = {
    entry: './index.js',
    output: {
        filename: './unique/index.js',
        // export to AMD, CommonJS, or window
        libraryTarget: 'umd',
        // the name exported to window
        library: 'unique'
    },
    mode: "development"
};