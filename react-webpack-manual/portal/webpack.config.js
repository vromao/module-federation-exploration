// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: './src/index.ts', // Ponto de entrada

  output: {
    publicPath: 'auto',
  },

  devServer: {
    port: 3000, // Porta do app host
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // O babel-loader cuida de tudo
      },
    ],
  },

  plugins: [
    // ---
    // PLUGIN DO MODULE FEDERATION (HOST)
    // ---
    new ModuleFederationPlugin({
      name: 'portal_app', // Nome do host

      // O que este app CONSOME
      remotes: {
        // 'app_remote' (nome local) : 'app_remote' (nome global) @ url
        contact_app: 'contact_app@http://localhost:3001/remoteEntry.js',
      },

      // Dependências compartilhadas
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
