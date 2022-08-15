import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
})
