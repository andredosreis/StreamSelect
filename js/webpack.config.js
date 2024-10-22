const path = require('path')

module.exports =  {
    entry: './src/index.js', // arquivo de entrada principal
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // modo de desenvolvimento
   
}