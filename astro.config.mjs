import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from 'astro/config'
import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  server: {
    host: true,
    port: 80
  },
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  })
});
