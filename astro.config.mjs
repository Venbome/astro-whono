import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import remarkCallout from './src/plugins/remark-callout.mjs';

export default defineConfig({
  // Required for RSS generation. Replace with your real domain.
  site: 'https://example.com',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkDirective, remarkCallout],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  }
});
