const path = require('path');

module.exports = {
  entry: './src/index.js', // Caminho para o arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Incluir também arquivos .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,  // Para carregar arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Para resolver ambos .js e .jsx
  },
  devServer: {
    static: path.join(__dirname, 'public'), // Pasta que contém os arquivos públicos
    compress: true,
    port: 8080,
  },
  mode: 'development', // Define o modo explicitamente como 'development'
};
