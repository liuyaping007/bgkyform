import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import configs from './configs/index.js'
import '@/icons/index.js' // icon
import 'font-awesome/css/font-awesome.min.css'
import '@/styles/index.css'
import '@/styles/cuIcon.css'
import '@/styles/animation.css'
import Cookies from 'js-cookie'
import './styles/comm.css'
import { commAxiosRequest, ajaxComm } from './api/index.js'
import myechart from '@/components/echart/index.vue'
import baseechart from '@/components/echart/baseechart.vue'
import fromdialog from '@/components/fromdialog.vue'
import weather from '@/components/weather.vue'
import bgkyform from 'bgkyform-ui'
import 'bgkyform-ui/bgkyform-ui.css' // 引入打包后的组件库
import { comminit } from '@/utils/comm.js'
Vue.use(dataV)

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'small', // set element-ui default size
})
Vue.use(bgkyform)
Vue.component('weather', weather)
Vue.component('myechart', myechart)
Vue.component('baseechart', baseechart)
Vue.component('fromdialog', fromdialog)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
Vue.prototype.$transformUrl = (url, isbool) => {
  let urlhead = configs.echartUrl + '/echartdb'
  if (isbool === true) {
    return urlhead + url
  } else {
    return url.replace('_@web', urlhead)
  }
}
const routerMode = router.mode
Vue.prototype.$event = {
  refreshload(id, urlparam) {
    let url = '/' + id
    if (routerMode != 'history') {
      url = '/#' + url
    }
    if (urlparam != null) {
      url = url + urlparam
    }
    window.location.href = url
  },
}
Vue.prototype.$commAxiosRequest = commAxiosRequest
Vue.prototype.$ajaxComm = ajaxComm

comminit()
