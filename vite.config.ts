import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), 'REACT_') }

  return defineConfig({
    base: './',
    envPrefix: 'REACT_',
    build: {
      outDir: 'build',
      emptyOutDir: true
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './renderer/components'),
        '@config': path.resolve(__dirname, './renderer/config'),
        '@graphql': path.resolve(__dirname, './renderer/graphql'),
        '@hooks': path.resolve(__dirname, './renderer/hooks'),
        '@store': path.resolve(__dirname, '/renderer/store')
      }
    },
    server: {
      host: 'localhost',
      port: 3000,
      https: false,
      cors: true,
      hmr: true,
      proxy: {
        '/graphql': {
          target: process.env.REACT_APP_GRAPHQL_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (url: string) => url.replace(/^\/graphql/, 'graphql')
        },
        '/api': {
          target: process.env.REACT_APP_GRAPHQL_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (url: string) => url.replace(/^\/api/, 'api')
        }
      }
    }
  })
}
