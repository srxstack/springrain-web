import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    vue: true,
  },
  // 注意：只能放在第二个参数位置，放在其他位置是无效的。
  ...compat.config({
    extends: [
      './.auto-import.json',
    ],
  }),
)
