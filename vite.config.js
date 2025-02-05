import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: "/prueba-frontend-estatica/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
    include: ['vue'],
  },
  build: {
    rollupOptions: {
      external: [], // Asegúrate de que Vue no sea externo
    },
    commonjsOptions: {
      include: [/node_modules/], // Asegura que Vue esté incluido en el bundle
    },
  },
});
