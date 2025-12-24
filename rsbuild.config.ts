import { defineConfig } from '@rsbuild/core';

import { VueLoaderPlugin } from 'vue-loader';
import { VuetifyPlugin, transformAssetUrls } from 'webpack-plugin-vuetify';

export default defineConfig({
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
  html: {
    template: './index.html',
  },
  resolve: {
    alias: {
      '@': './src',
    },
    extensions: ['.html', '.ts', '.js'],
  },
  server: {
    historyApiFallback: true,
    port: 80,
  },
  tools: {
    rspack: {
      plugins: [
        new VueLoaderPlugin({ transformAssetUrls }),
        new VuetifyPlugin(),
      ],
      module: {
        rules: [
          {
            test: /\.html$/,
            exclude: /index\.html$/,
            loader: 'vue-loader',
            options: {
              experimentalInlineMatchResource: true,
            },
          },
        ],
      },
    },
  },
});
