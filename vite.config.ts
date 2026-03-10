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
      find: /\/#\//, // /@/xxxx => src/xxxx
      replacement: pathResolve('src') + '/',
    }]
  },
  build: {
    lib: {
      entry: {
        'index': pathResolve('src/index.ts'),
        'hooks': pathResolve('src/hooks/index.ts'),
      },
      name: 'WoonUI',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue', 'dayjs'],
      output: {
        globals: {
          'vue': 'vue',
          'ant-design-vue': 'antd'
        },
        exports: 'named',
        /*assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'woon-ui.css';
          return assetInfo.name || '';
        },*/
      }
    },
  }
});
