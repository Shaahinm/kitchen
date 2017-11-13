<template>  
  <div class="section">   
    <div class="box side">
      <create-recipe-sidebar></create-recipe-sidebar>
    </div>   
    <div class="box main">
      <div class="container is-fluid"> 
      <div class="columns">
        <div class="box column is-mobile is-tablet is-desktop is-half-widescreen">          
            <div class="field">
              <label class="label">نام غذای مورد نظر</label>
              <div class="control has-icons-left">
                <input name="name" v-validate="'required'" v-model="recipe.name" :class="{'input': true, 'is-danger': errors.has('name')}" type="text" placeholder="نام غذای مورد نظر">
                <span class="icon is-small is-left">
                  <i v-show="errors.has('name')" class="fa fa-warning"></i>                   
                </span>
                <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
              </div>
            </div>
            <div class="field">
              <label class="label">این مقدار مواد اولیه به چند نفر غذا میدهد</label>
              <div class="control has-icons-left">
                <input name="serves" v-validate="'numeric|required'" v-model="recipe.serves" :class="{'input': true, 'is-danger': errors.has('serves')}" type="text" placeholder="این مقدار مواد اولیه به چند نفر غذا میدهد">
                <span class="icon is-small is-left">
                  <i v-show="errors.has('serves')" class="fa fa-warning"></i>                   
                </span>
              <span v-show="errors.has('serves')" class="help is-danger">{{ errors.first('serves') }}</span>
              </div>                            
            </div>
            <div class="field">
              <label class="label">مدت آماده سازی</label>
              <div class="control has-icons-left">
                <input name="prepTime" v-validate="'required'" v-model="recipe.prepTime" :class="{'input': true, 'is-danger': errors.has('prepTime')}" type="text" placeholder="مدت آماده سازی">
                <span class="icon is-small is-left">
                  <i v-show="errors.has('prepTime')" class="fa fa-warning"></i>                   
                </span>
                <span v-show="errors.has('prepTime')" class="help is-danger">{{ errors.first('prepTime') }}</span>
              </div>              
            </div>
            <div class="field">
              <label class="label">مدت طبخ</label>
              <div class="control has-icons-left">
                <input name="cookTime" v-validate="'required'" v-model="recipe.cookingTime" :class="{'input': true, 'is-danger': errors.has('cookTime')}" type="text" placeholder="مدت طبخ">
                <span class="icon is-small is-left">
                  <i v-show="errors.has('cookTime')" class="fa fa-warning"></i>                   
                </span>
                <span v-show="errors.has('cookTime')" class="help is-danger">{{ errors.first('cookTime') }}</span>
              </div>
            </div>
            <div class="field">
              <label class="label">درجه سختی</label>
              <div class="control has-icons-left">
                <input name="difficulty" v-validate="'required'" v-model="recipe.difficulty" :class="{'input': true, 'is-danger': errors.has('difficulty')}" type="text" placeholder="درجه سختی">
                  <span class="icon is-small is-left">
                    <i v-show="errors.has('difficulty')" class="fa fa-warning"></i>                   
                  </span>
                <span v-show="errors.has('difficulty')" class="help is-danger">{{ errors.first('difficulty') }}</span>
              </div>
            </div>
            <div class="field">
              <div class="control my-checkbox">
                <label class="checkbox">
                  <input type="checkbox">
                  آیا این غذا گیاهی میباشد؟
                </label>
              </div>
            </div>
            <div class="field">    
              <div class="control my-button">
                <button @click="save()" class="button is-link">ذخیره</button>
              </div>    
            </div>
        </div>        
      </div>      
    </div>
    </div>
  </div>
</template>
<script>
import { HttpCall } from "./../../utils/axios-config";
import { recipeManager } from "./../../utils/recipe-manager";
export default {
  data() {
    return {            
      recipe: {
        localId: 0,
        name: "",
        serves: 0,
        cookingTime: "",
        prepTime: "",
        isVegan: false,
        difficulty: "",
        parts: []
      }
    };
  },
  methods: {
    save() {
      this.$validator.validateAll().then(result => {
        if (result) {
          var id = Date.now();
          recipeManager.createToken();
          var currentKitchen = recipeManager.getParsedToken();
          this.recipe.localId = id;
          currentKitchen.recipes.push(this.recipe);
          recipeManager.setToken(currentKitchen);          
          this.$toasted.global.success_toast();
          this.$router.push({
            name: "edit-recipe-ingredients",
            params: { id }
          });
          return;
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.field {
  min-height: 90px;
  margin-top: 0;
}
// .column {
//   align-content: center;
//   // text-align: center;
//   min-width: 400px;
//   max-width: 600px;
//   margin: 0 auto;
// }
.columns .field {
  margin-top: 24px;
}
.my-height {
  min-height: 18px;
}

.my-checkbox {
  text-align: right;
  direction: rtl;
}

.my-button {
  text-align: right;
}
</style>

