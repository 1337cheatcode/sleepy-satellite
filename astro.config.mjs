import { defineConfig } from 'astro/config';
import qwikdev from "@qwikdev/astro";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), lit()]
});