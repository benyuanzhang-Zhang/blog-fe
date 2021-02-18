/**
* @Description 插件引入页面
* @date    2021:02:09 20:29:48
* @version 1.0.0
*/

// import '@/assets/style/public.less'
// Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'tailwindcss/tailwind.css'

export default {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  async install (Vue) {
    Vue.config.tooltips = false
    Vue.use(ElementUI)
  }
}
