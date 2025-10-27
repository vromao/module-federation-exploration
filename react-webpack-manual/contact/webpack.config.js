// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies; // Pega dependências

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: './src/index.ts', // Ponto de entrada

  output: {
    publicPath: 'auto', // Essencial para Module Federation
  },

  devServer: {
    port: 3001, // Porta do app remoto
    headers: {
      'Access-Control-Allow-Origin': '*', // Permite CORS
    },
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
    // PLUGIN DO MODULE FEDERATION (REMOTE)
    // ---
    new ModuleFederationPlugin({
      name: 'contact_app', // Nome global do app
      filename: 'remoteEntry.js', // O "manifesto" do app

      // O que este app EXPÕE
      exposes: {
        './ContactApp': './src/App.tsx', // Expõe o componente
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

    // Plugin para injetar o <script> no HTML
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
