// 假设您正在使用 VueUse 的 useStorage 和 syncRef
import { syncRef, useStorage } from '@vueuse/core'
import { defu } from 'defu'
import { createI18n } from 'vue-i18n'

// 1. **修改 glob 模式**：只匹配 '../../locales/' 目录下的 .json 文件
//    例如： '../../locales/en.json', '../../locales/zh.json'
const jsons = import.meta.glob('../../locales/*.json', {
  eager: true
})

const languages = Object.entries(jsons).map(([key, value]) => {

  // 路径切片逻辑：
  // 1. 去掉 '../../locales/' (共 14 个字符)
  // 2. 去掉 '.json' (共 5 个字符)
  // 剩下的就是语言代码 (例如 'zh')
  const langKey = key.slice(14, -5)

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  // 对于 JSON 文件，value.default 是解析后的内容对象
  return { [langKey]: value.default }
})

// 2. 将所有语言文件内容合并成一个 messages 对象
//    注意：由于现在每个文件对应一个语言，这里合并只是为了defu能处理单个对象
const messages = defu({}, ...languages)

// localStorage 中的 locale，第二个参数为默认值
const storageLocale = useStorage('locale', 'zh')

export const i18n = createI18n({
  messages,
  // 使用 storageLocale 的值作为初始的 locale
  locale: storageLocale.value,
  legacy: false,
  globalInjection: true,
  allowComposition: true
})

// 同步本地 localStorage 和 i18n
syncRef(storageLocale, i18n.global.locale)

export default i18n
