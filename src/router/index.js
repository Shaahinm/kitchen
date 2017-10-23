import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about'
import Navbar from '@/components/layout/navbar.vue'
import Kitchen from '@/components/Kitchen.vue'
import SearchBar from '@/components/SearchBar.vue'
import Login from '@/components/authentication/login'


Vue.use(Router)
Vue.component('navbar', Navbar)
Vue.component('searchbar', SearchBar)


export default new Router({
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/about', name: 'about', component: About },
    { path: '/kitchen', name: 'kitchen', component: Kitchen},
    { path: '/authentication/login', name: 'login', component: Login},
    { path: '*', redirect: '/' }
  ]
})
