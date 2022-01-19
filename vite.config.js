import { defineConfig } from 'vite'

export default defineConfig({
        build: {
    chunkSizeWarningLimit: 800,
  },
  rollupOptions: {
      external: ['three']
    }
})
