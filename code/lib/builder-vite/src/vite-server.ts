import type { Server } from 'http';
import { createServer } from 'vite';
import { commonConfig } from './vite-config';
import type { ExtendedOptions } from './types';
import { getOptimizeDeps } from './optimizeDeps';

export async function createViteServer(options: ExtendedOptions, devServer: Server) {
  const { presets } = options;

  const config = await commonConfig(options, 'development');

  // Set up dev server
  config.server = {
    middlewareMode: true,
    hmr: {
      port: options.port,
      server: devServer,
    },
    fs: {
      strict: true,
    },
  };
  config.appType = 'custom';

  // TODO: find a way to avoid having to do this in a separate step.
  config.optimizeDeps = await getOptimizeDeps(config, options);

  const finalConfig = await presets.apply('viteFinal', config, options);
  return createServer(finalConfig);
}
