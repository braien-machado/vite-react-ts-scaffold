/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text']
    },
    globals: true,
    setupFiles: './src/__tests__/setup.ts',
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
