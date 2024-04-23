// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true
  },
  {
    rules: {
      'style/comma-dangle': ['error', 'never'], // 关闭尾随逗号
      'no-console': 'off'
    }
  },
  {
    // 忽略检查 md文件和d.ts文件
    ignores: ['**/*.md', '**/*.d.ts']
  }
)
