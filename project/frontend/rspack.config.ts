import { defineConfig } from '@rspack/cli';
import { rspack, type SwcLoaderOptions } from '@rspack/core';
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh';
import { TsCheckerRspackPlugin } from 'ts-checker-rspack-plugin';
import path from 'path';
import ESLintPlugin from 'eslint-rspack-plugin';

const isDev = process.env.NODE_ENV === 'development';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['last 2 versions', '> 0.2%', 'not dead', 'Firefox ESR'];

export default defineConfig({
  entry: {
    main: './src/main.tsx',
  },
  output: {
    publicPath: '/',
    filename: '[name]-[contenthash].js',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        type: 'css/auto',
      },
      {
        test: /\.module\.css$/i,
        type: 'css/module',
      },
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                    importSource: '@emotion/react',
                  },
                },
                experimental: {
                  plugins: [['@swc/plugin-emotion', {}]],
                },
              },
              env: { targets },
            } satisfies SwcLoaderOptions,
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            // options: {
            //   // ...
            // },
          },
        ],
        // set to 'css/auto' if you want to support '*.module.less' as CSS Modules, otherwise set type to 'css'
        type: 'css/auto',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    new TsCheckerRspackPlugin({
      typescript: {
        configFile: './tsconfig.json',
      },
    }),
    new ESLintPlugin({
      configType: 'flat',
      extensions: ['ts', 'tsx'],
    }),
    isDev ? new ReactRefreshRspackPlugin() : null,
  ],
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    css: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
    client: {
      logging: 'error',
    },
  },
});
