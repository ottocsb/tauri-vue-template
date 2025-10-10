import { defineConfig } from 'vite'
import Tov from './presets'
// eslint-disable-next-line node/prefer-global/process
const host = process.env.TAURI_DEV_HOST
export default defineConfig({
  // 端口号
  // prevent vite from obscuring rust errors
  clearScreen: false,
  plugins: [Tov()],
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: 'ws',
          host,
          port: 1421
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**']
    }
  }
})
