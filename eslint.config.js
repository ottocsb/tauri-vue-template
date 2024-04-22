// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true
  },
  {
    rules: {
      'style/comma-dangle': ['error', 'never'] // 关闭尾随逗号
    }
  }
)
