import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// At the top of your vite.config.js or entry file:
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = require('crypto').webcrypto;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
