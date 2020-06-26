/**
* @Description set main.js
* @authors zhangmingxin (zhangmingxin@linkeddt.com)
* @date    2020:06:25 07:56:40
* @version 1.0.0
*/
import '@/assets/style/public.less'
// flex layout
import 'flex.css'
// Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  async install (Vue: any) {
    Vue.config.tooltips = false
    Vue.use(ElementUI)
  }
}
