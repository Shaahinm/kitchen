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

let router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/test',
      name: 'test',
      component: TestComponent
    },
    {
      path: '/search/:query?',
      name: 'search',
      component: SearchComponent
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: Kitchen,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/kitchen/recipes/create',
      name: 'create-recipe',
      component: CreateRecipe,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/kitchen/recipes/edit/:id/basicinfo',
      name: 'edit-recipe-basic-info',
      component: CreateRecipeBasicInfo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/kitchen/recipes/edit/:id/ingredients',
      name: 'edit-recipe-ingredients',
      component: CreateRecipeIngredients,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/kitchen/recipes/edit/:id/instruction',
      name: 'edit-recipe-instruction',
      component: CreateRecipeInstruction,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/kitchen/recipes/all/unsaved',
      name: 'unsaved-recipes',
      component: UnsavedRecipes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/authentication/login',
      name: 'login',
      component: Login
    },
    {
      path: '/authentication/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {    

  //  console.log(window.auth.isLoggedIn());
  // console.log(Vue.prototype.$auth.isLoggedIn());
    
    // let token = localStorage.getItem('token')
    if (!Vue.prototype.$auth.isLoggedIn()) {
      next({
        path: '/authentication/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
