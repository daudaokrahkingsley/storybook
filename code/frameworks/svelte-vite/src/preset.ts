import path from 'path';
import fs from 'fs';
import type { StorybookConfig } from '@storybook/builder-vite';

export const addons: StorybookConfig['addons'] = ['@storybook/svelte'];

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
  const svelteOptions = await presets.apply<Record<string, any>>('frameworkOptions');

  // eslint-disable-next-line global-require
  const { loadSvelteConfig } = require('@sveltejs/vite-plugin-svelte');
  const csfConfig = { ...loadSvelteConfig(), ...svelteOptions };

  try {
    // eslint-disable-next-line global-require
    const csfPlugin = require('./plugins/csf-plugin').default;
    plugins.push(csfPlugin(csfConfig));
  } catch (err) {
    // Not all projects use `.stories.svelte` for stories, and by default 6.5+ does not auto-install @storybook/addon-svelte-csf.
    // If it's any other kind of error, re-throw.
    if ((err as NodeJS.ErrnoException).code !== 'MODULE_NOT_FOUND') {
      throw err;
    }
  }

  const { svelteDocgen } = await import('./plugins/svelte-docgen');
  plugins.push(svelteDocgen(config));

  return {
    ...config,
    plugins,
  };
};
