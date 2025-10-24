import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    external: ['react'],
    entry: ['src/index.ts', 'src/components.ts', 'src/helpers.ts'],
    format: ['esm', 'cjs'],
    splitting: true,
    cjsInterop: true,
    skipNodeModulesBundle: true,
    treeshake: false,
    metafile: true,
  };
});
