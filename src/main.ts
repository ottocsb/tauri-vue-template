import App from './App.vue'
// https://unocss.dev/ 原子 css 库
import 'virtual:uno.css'

import 'virtual:unocss-devtools'

// 你自定义的 css
import './styles/main.css'

const app = createApp(App)

app.mount('#app')
