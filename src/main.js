import Vue from 'vue'
import VueRouter from 'vue-router'
import { Button, Calendar } from 'element-ui';
import App from './App.vue'

import Foo from './pages/Foo.vue'
const Bar = () => import(/* webpackChunkName: "group-bar" */ './pages/Bar.vue') // 异步加载文件

Vue.use(VueRouter)

Vue.use(Button)
Vue.use(Calendar)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');




