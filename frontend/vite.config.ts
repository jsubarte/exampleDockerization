import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(( { mode } ) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react()],
    server:{
      host: env.VITE_APP_HOST || 'localhost',
      port: Number(env.VITE_APP_PORT || 5175),
      strictPort: true
    }
  }
})