import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import xss from 'xss'
import md5 from 'js-md5';
import set from './utils/title'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import {
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Button,
  Loading 
} from 'element-ui';
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Pagination)
Vue.use(Button)
Vue.use(Loading)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$xss', {
  value: xss
})
Vue.prototype.$md5 = md5;

router.beforeEach((to,from,next)=>{
  if (to.meta.title) {
    set.setTitle(to.meta.title)
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')