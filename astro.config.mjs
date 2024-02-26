import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { ANALYTICS_CONFIG, SITE_CONFIG } from './src/utils/config.ts';
import vercel from '@astrojs/vercel/static';
// Import necessary modules and functions
import vercel from '@astrojs/vercel';
import readingTimeRemarkPlugin from 'some-reading-time-plugin'; // Ensure you import this from the correct package


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) =>
  ANALYTICS_CONFIG.vendors.googleAnalytics.id && ANALYTICS_CONFIG.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.flatMap((item) => item())
      : [items()]
    : [];

// https://astro.build/config
export default defineConfig({
  site: SITE_CONFIG.site,
  base: SITE_CONFIG.base,
  trailingSlash: SITE_CONFIG.trailingSlash ? 'always' : 'never',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    ...whenExternalScripts(() =>
      partytown({
        config: {
          forward: ['dataLayer.push'],
        },
      })
    ),
    tasks(),
    
  ],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },
  // Enable experimental features
  experimental: {
    devOverlay: true,
  },
  // Configure Vite for resolving aliases
  vite: {
    resolve: {
      alias: {
        // Correctly resolve the '~' alias to the src directory
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  // Configure the Vercel adapter with options
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});