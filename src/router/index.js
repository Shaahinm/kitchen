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
import CreateRecipe from '@/components/recipe/create'
import CreateRecipeBasicInfo from '@/components/recipe/basicinfo'
import CreateRecipeIngredients from '@/components/recipe/ingredients'

Vue.use(Router)
Vue.component('navbar', Navbar)
Vue.component('searchbar', SearchBar)
Vue.component('kitchen-banner', KitchenBanner)
Vue.component('kitchen-sidebar', KitchenSidebar)
Vue.component('kitchen-main', KitchenMain)
Vue.component('basic-info', CreateRecipeBasicInfo)
Vue.component('ingredients', CreateRecipeIngredients)



export default new Router({
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/about', name: 'about', component: About },
    { path: '/kitchen', name: 'kitchen', component: Kitchen},
    { path: '/recipe/create', name: 'create-recipe', component: CreateRecipe},
    { path: '/authentication/login', name: 'login', component: Login},
    { path: '/authentication/register', name: 'register', component: Register},
    { path: '*', redirect: '/' }
  ]
})
