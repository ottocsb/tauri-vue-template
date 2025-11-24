import presetWind4 from '@unocss/preset-wind4'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetAttributify(),
    presetIcons({
      autoInstall: true
    }),
    presetWind4({
      preflights: {
        reset: true,
        theme: true
      }
    }),
    presetTypography()
  ]
})
