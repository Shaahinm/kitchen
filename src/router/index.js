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
import RecipeModel from '@/components/recipe/model/recipemodel'
import CreateRecipeSidebar from '@/components/recipe/sidebar/sidebar'
import CreateRecipeBasicInfo from '@/components/recipe/basicinfo/basicinfo'
import CreateRecipeIngredients from '@/components/recipe/ingredinets/ingredients'
import CreateRecipeIngredientsParts from '@/components/recipe/ingredinets/part'
import CreateRecipeInstruction from '@/components/recipe/instruction/instruction'
import UnsavedRecipes from '@/components/recipe/all/unsavedrecipes'
import HelpComponent from '@/components/utility/help'
import SearchComponent from '@/components/search/search'
import TestComponent from '@/components/test/test'

import ConfirmationDialog from '@/components/utility/confirmationdialog'


Vue.use(Router)
Vue.component('navbar', Navbar)
Vue.component('searchbar', SearchBar)
Vue.component('kitchen-banner', KitchenBanner)
Vue.component('kitchen-sidebar', KitchenSidebar)
Vue.component('kitchen-main', KitchenMain)
Vue.component('ingredient-part', CreateRecipeIngredientsParts)
Vue.component('create-recipe-sidebar', CreateRecipeSidebar)
// Vue.component('recipe-model', RecipeModel)
Vue.component('confirmation-dialog', ConfirmationDialog)
Vue.component('help-component', HelpComponent)


// Vue.component('basic-info', CreateRecipeBasicInfo)
// Vue.component('ingredients', CreateRecipeIngredients)



export default new Router({
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/about', name: 'about', component: About },
    { path: '/test', name: 'test', component: TestComponent },
    { path: '/search/:query?', name: 'search', component: SearchComponent },
    { path: '/kitchen', name: 'kitchen', component: Kitchen},
    { path: '/kitchen/recipes/create', name: 'create-recipe', component: CreateRecipe},    
    { path: '/kitchen/recipes/edit/:id/basicinfo', name: 'edit-recipe-basic-info', component: CreateRecipeBasicInfo},
    { path: '/kitchen/recipes/edit/:id/ingredients', name: 'edit-recipe-ingredients', component: CreateRecipeIngredients},
    { path: '/kitchen/recipes/edit/:id/instruction', name: 'edit-recipe-instruction', component: CreateRecipeInstruction},
    { path: '/kitchen/recipes/all/unsaved', name: 'unsaved-recipes', component: UnsavedRecipes},
    { path: '/authentication/login', name: 'login', component: Login},
    { path: '/authentication/register', name: 'register', component: Register},
    { path: '*', redirect: '/' }
  ]
})
