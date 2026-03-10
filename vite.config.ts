import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{
      find: /\/@\//, // /@/xxxx => src/xxxx
      replacement: pathResolve('src') + '/',
    }]
  },
  build: {
    lib: {
      entry: {
        index: pathResolve('src/components/index.ts'),
        hooks: pathResolve('src/hooks/index.ts'),
      },
      name: 'WoonUI',
      fileName: (format) => `woon-ui.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue', 'dayjs'],
      output: {
        globals: {
          'vue': 'vue',
          'ant-design-vue': 'antd'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'woon-ui.css';
          return assetInfo.name || '';
        },
      }
    },
    outDir: 'woon-ui'
  }
});
