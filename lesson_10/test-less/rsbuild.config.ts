import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginLess()],
});
