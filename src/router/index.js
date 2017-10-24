import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about'
import Navbar from '@/components/layout/navbar.vue'
import Kitchen from '@/components/kitchen/Kitchen.vue'
import SearchBar from '@/components/SearchBar.vue'
import Login from '@/components/authentication/login'
import Register from '@/components/authentication/register'
import KitchenBanner from '@/components/kitchen/kitchen-banner'
import KitchenSidebar from '@/components/kitchen/kitchen-sidebar'
import KitchenMain from '@/components/kitchen/kitchen-main'

Vue.use(Router)
Vue.component('navbar', Navbar)
Vue.component('searchbar', SearchBar)
Vue.component('kitchen-banner', KitchenBanner)
Vue.component('kitchen-sidebar', KitchenSidebar)
Vue.component('kitchen-main', KitchenMain)


export default new Router({
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/about', name: 'about', component: About },
    { path: '/kitchen', name: 'kitchen', component: Kitchen},
    { path: '/authentication/login', name: 'login', component: Login},
    { path: '/authentication/register', name: 'register', component: Register},
    { path: '*', redirect: '/' }
  ]
})
