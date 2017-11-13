<template>  
  <div class="section"> 
    <confirmation-dialog :status="activateModal" @handleUserInput="handleConfirmationResult_child"></confirmation-dialog>
    <div class="box side">
        <create-recipe-sidebar></create-recipe-sidebar>
    </div>   
    <div class="box main">
        <div class="container is-fluid">
            <div v-if="recipes.length > 0">
                <!-- <div class="column" v-for="recipe in recipes" :key="recipe.localId">
                    <recipe-model :model="recipe"></recipe-model>                     
                </div>                                 -->
                <table class="table is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th class="">نام غذا</th>
                      <th></th>                      
                    </tr>
                  </thead>                  
                  <tbody>
                    <tr v-for="recipe in recipes" :key="recipe.localId">
                      <td>
                        <p class="is-bold">
                          {{recipe.name}}
                        </p>
                      </td>
                      <td>
                        <router-link class="button is-link" :to="{name: 'edit-recipe-basic-info', params: {id: recipe.localId}}">ویرایش اطلاعات اولیه</router-link> 
                        <router-link class="button is-link" :to="{name: 'edit-recipe-ingredients', params: {id: recipe.localId}}">ویرایش مواد اولیه</router-link> 
                        <router-link class="button is-link" :to="{name: 'edit-recipe-instruction', params: {id: recipe.localId}}">ویرایش دستور</router-link> 
                        <button class="button is-danger" @click="deleteRecipe(recipe)">حذف</button>
                      </td> 
                    </tr>                                
                  </tbody>
                </table>
            </div>             
            <div v-else>
                <p style="line-height: normal;">در حال حاضر شما دستور غذای در حال تحریر ندارد. آیا مایل به ساخت آن هستید؟
                     <router-link class="button is-link" :to="{name: 'create-recipe'}">ساخت دستور جدید</router-link>
                </p>                 
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { HttpCall } from "./../../../utils/axios-config";
import { recipeManager } from "./../../../utils/recipe-manager";
export default {
  data() {
    return {      
      recipes: [],
      activateModal: "",
      recipeToDelete: {}
    };
  },
  methods: {
    getRecipes() {
      var kitchen = recipeManager.getParsedToken();
      if (kitchen && kitchen.recipes.length > 0) {
        kitchen.recipes.forEach(function(element) {
          this.recipes.push(element);
        }, this);
      }
    },
    deleteRecipe(recipe) {
      this.activateModal = "activate";
      this.recipeToDelete = recipe;
    },
    handleConfirmationResult_child(res) {
      if (res === "true") {
        this.doDeleteRecipe(this.recipeToDelete);
      }
      this.activateModal = "";
      this.recipeToDelete = {};
    },
    doDeleteRecipe(recipe) {
      
      var kitchen = recipeManager.getParsedToken();      

      var recipeToDelet = kitchen.recipes.find(
        e => e.localId == recipe.localId
      );
      var index = kitchen.recipes.indexOf(recipeToDelet);      
      if (index !== -1) {
        kitchen.recipes.splice(index, 1);
        this.recipes.splice(index, 1);
        recipeManager.setToken(kitchen);
        this.$toasted.global.success_toast();
      } else {
        this.$toasted.global.error_toast();
      }        
    }
  },
  mounted() {
    this.getRecipes();
  }
};
</script>
<style lang="scss" scoped>
.table th {
  text-align: right;
}
</style>

