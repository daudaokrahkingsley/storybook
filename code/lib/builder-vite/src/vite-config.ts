import * as path from 'path';
import fs from 'fs';
import { loadConfigFromFile, mergeConfig } from 'vite';
import type {
  ConfigEnv,
  InlineConfig as ViteInlineConfig,
  PluginOption,
  UserConfig as ViteConfig,
} from 'vite';
import viteReact from '@vitejs/plugin-react';
import { isPreservingSymlinks } from '@storybook/core-common';
import { codeGeneratorPlugin } from './code-generator-plugin';
import { stringifyProcessEnvs } from './envs';
import { injectExportOrderPlugin } from './inject-export-order-plugin';
import { mdxPlugin } from './plugins/mdx-plugin';
import { noFouc } from './plugins/no-fouc';
import { stripStoryHMRBoundary } from './plugins/strip-story-hmr-boundaries';
import type { ExtendedOptions, EnvsRaw } from './types';

export type PluginConfigType = 'build' | 'development';

export function readPackageJson(): Record<string, any> | false {
  const packageJsonPath = path.resolve('package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return false;
  }

  const jsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  return JSON.parse(jsonContent);
}

const configEnvServe: ConfigEnv = {
  mode: 'development',
  command: 'serve',
  ssrBuild: false,
};

const configEnvBuild: ConfigEnv = {
  mode: 'production',
  command: 'build',
  ssrBuild: false,
};

// Vite config that is common to development and production mode
export async function commonConfig(
  options: ExtendedOptions,
  _type: PluginConfigType
): Promise<ViteInlineConfig> {
  const { presets } = options;
  const configEnv = _type === 'development' ? configEnvServe : configEnvBuild;

  const { config: userConfig = {} } = (await loadConfigFromFile(configEnv)) ?? {};

  const sbConfig = {
    configFile: false,
    cacheDir: 'node_modules/.vite-storybook',
    root: path.resolve(options.configDir, '..'),
    plugins: await pluginConfig(options),
    resolve: { preserveSymlinks: isPreservingSymlinks() },
    // If an envPrefix is specified in the vite config, add STORYBOOK_ to it,
    // otherwise, add VITE_ and STORYBOOK_ so that vite doesn't lose its default.
    envPrefix: userConfig.envPrefix ? 'STORYBOOK_' : ['VITE_', 'STORYBOOK_'],
  };

  const config: ViteConfig = mergeConfig(userConfig, sbConfig);

  // Sanitize environment variables if needed
  const envsRaw = await presets.apply<Promise<EnvsRaw>>('env');
  if (Object.keys(envsRaw).length) {
    // Stringify env variables after getting `envPrefix` from the  config
    const envs = stringifyProcessEnvs(envsRaw, config.envPrefix);
    config.define = {
      ...config.define,
      ...envs,
    };
  }

  return config;
}

export async function pluginConfig(options: ExtendedOptions) {
  const { presets } = options;
  const framework = await presets.apply('framework', '', options);
  const frameworkName: string = typeof framework === 'object' ? framework.name : framework;
  const svelteOptions: Record<string, any> = await presets.apply('svelteOptions', {}, options);

  const plugins = [
    codeGeneratorPlugin(options),
    // sourceLoaderPlugin(options),
    mdxPlugin(options),
    noFouc(),
    injectExportOrderPlugin,
    stripStoryHMRBoundary(),
  ] as PluginOption[];

  // We need the react plugin here to support MDX in non-react projects.
  if (frameworkName !== '@storybook/react-vite') {
    plugins.push(viteReact());
  }

  if (frameworkName === 'preact') {
    // eslint-disable-next-line global-require
    plugins.push(require('@preact/preset-vite').default());
  }

  if (frameworkName === 'glimmerx') {
    // eslint-disable-next-line global-require, import/extensions
    const plugin = require('vite-plugin-glimmerx/index.cjs');
    plugins.push(plugin.default());
  }

  return plugins;
}
