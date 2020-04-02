import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TabBar from '../components/tabBar'
import CataLogList from '../views/catalogList'
import ArticleDetails from '../views/articleDetails'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'TabBar',
    meta: {
      title: '首页'
    },
    component: TabBar,
    redirect: '/home',
    children: [{
        path: 'home',
        name: 'Home',
        meta: {
          title: '当代贵州电子版',
          showTitle: true //是否显示titl
        },
        component: Home
      },
      {
        path: 'cataLogList',
        name: 'CataLogList',
        meta: {
          title: '当期杂志目录列表',
          showTitle: false //是否显示titl
        },
        component: CataLogList
      },
      {
        path: 'articleDetails',
        name: 'ArticleDetails',
        meta: {
          title: '当期杂志文章详情',
          showTitle: false //是否显示titl
        },
        component: ArticleDetails
      }
    ]
  },
  {
    path: 'home',
    name: 'Homes',
    meta: {
      title: '当代贵州电子版',
      showTitle: true //是否显示titl
    },
    component: Home
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from,savedPosition) { // 每次跳转回到顶部
    return {x:0,y:0}
  }
})

export default router