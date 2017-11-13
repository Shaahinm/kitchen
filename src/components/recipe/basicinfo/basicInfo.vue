<template>  
<div class="section">
  <div class="box side">
    <create-recipe-sidebar></create-recipe-sidebar>
  </div>      
    <div class="box main">   
      <div class="tabs is-large is-fullwidth is-centered" dir="ltr">
        <ul>      
          <li><a>نمایش پایانی</a></li>
          <li><router-link :to="{ name: 'edit-recipe-instruction', params: {id: this.localId}}" active-class="is-active" exact>دستور غذا</router-link></li>   
          <li><router-link :to="{ name: 'edit-recipe-ingredients', params: {id: this.localId}}" active-class="is-active" exact>مواد اولیه</router-link></li>             
          <li class="is-active"><router-link :to="{ name: 'edit-recipe-basic-info', params: {id: this.localId}}" active-class="is-active" exact>اطلاعات اولیه</router-link></li>             
        </ul>     
      </div>     
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
      <div class="column">
        <help-component title="سلام" :body="help_body"></help-component>
        </div>        
      </div>      
    </div>    
  </div>
</template>
<script>
import { HttpCall } from "@/utils/axios-config";
import { recipeManager } from "@/utils/recipe-manager";
export default {
  data() {
    return {
      isLoading: false,
      html: '<img src="static/puff.svg" />',
      recipe: {},
      localId: 0,
      help_body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
    };
  },
  methods: {
    save() {
      this.$validator.validateAll().then(result => {
        if (result) {
          var currentKitchen = recipeManager.getParsedToken();
          var recipeToUpdate = currentKitchen.recipes.find(
            e => e.localId == this.localId
          );
          var index = currentKitchen.recipes.indexOf(recipeToUpdate);
          if (index !== -1) {
            currentKitchen.recipes.splice(index, 1);
            currentKitchen.recipes.push(this.recipe);
            recipeManager.setToken(currentKitchen);
            this.$toasted.global.success_toast();
            this.$router.push({
              name: "edit-recipe-ingredients",
              params: { id: this.localId }
            });
          }

          // currentKitchen.recipes.push(this.recipe);
          // recipeManager.setToken(currentKitchen);
          // this.$toasted.global.success_toast();
          //
          //
          //
          //
          // return;
        }
      });
    },
    save2() {
      this.$router.push({ name: "edit-recipe-ingredients" });
    },
    loadBasicInfo() {
      this.recipe = recipeManager.getRecipeById(this.localId);
      console.log(this.recipe);
    }
  },
  mounted() {
    this.localId = this.$route.params.id;
    this.loadBasicInfo();
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.field {
  min-height: 90px;
  margin-top: 0;
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

