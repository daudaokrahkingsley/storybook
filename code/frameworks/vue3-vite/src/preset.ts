import path from 'path';
import fs from 'fs';
import type { StorybookConfig } from '@storybook/builder-vite';
import { vueDocgen } from './plugins/vue-docgen';

export const addons: StorybookConfig['addons'] = ['@storybook/vue3'];

export const core: StorybookConfig['core'] = {
  builder: '@storybook/builder-vite',
};

export function readPackageJson(): Record<string, any> | false {
  const packageJsonPath = path.resolve('package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return false;
  }

  const jsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  return JSON.parse(jsonContent);
}

export const viteFinal: StorybookConfig['viteFinal'] = async (config, { presets }) => {
  const { plugins = [] } = config;

  plugins.push(vueDocgen());

  const updated = {
    ...config,
    plugins,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
  };
  return updated;
};
