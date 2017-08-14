import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Auth from '@/components/Auth'
import MainPage from '@/components/MainPage'
import NewQuestion from '@/components/NewQuestion'
import PageProfil from '@/components/PageProfil'
import ListQuestion from '@/components/ListQuestion'

import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      props: true
    },
    {
      path: '/registration',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/pageprofil',
      name: 'PageProfil',
      component: PageProfil
    }
  ]
})
