import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'], // 需要自动引入的库。例如 vue vue-router pinia
      dts: 'src/types/auto-imports.d.ts', // pnpm dev 之后生成的import文件
      eslintrc: {
        // 这里先设置成true然后pnpm dev 运行之后会生成 .auto-import.json 文件之后，在改为false
        enabled: true,
        filepath: './.auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
})
