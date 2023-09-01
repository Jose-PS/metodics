const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([withImages], {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/audio/', // Ruta pública de salida para los archivos MP3
          outputPath: 'static/audio/', // Directorio de salida para los archivos MP3
        },
      },
    });

    return config;
  },
});
