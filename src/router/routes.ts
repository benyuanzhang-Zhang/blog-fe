/**
* @Description router index
* @authors zhangmingxin (zhangmingxin@linkeddt.com)
* @date    2020:06:26 12:00:37
* @version 1.0.0
*/
import { RouteConfig } from 'vue-router'
import TheLayout from '@/layout/TheLayout.vue'
import _import from '@/libs/util.import'

const frameIn: Array<RouteConfig> = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: TheLayout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: _import('system/index/TheIndex')
      }
    ]
  }
]

export default [
  ...frameIn
]
