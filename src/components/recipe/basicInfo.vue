<template>  
  <md-layout md-gutter dir="rtl">
  <md-layout md-column md-gutter>
    <md-layout>
        <md-input-container>
            <label>نام غذای مورد نظر</label>
            <md-input v-model="recipe.name"></md-input>                
        </md-input-container>      
    </md-layout>
    <md-layout>
         <md-input-container>
            <label>این مقدار مواد اولیه به چند نفر غذا میدهد</label>
            <md-input type="number" v-model="recipe.serves"></md-input>                
        </md-input-container>    
    </md-layout>
    <md-layout>
         <md-input-container>
            <label>مدت آماده سازی</label>
            <md-input v-model="recipe.prepTime"></md-input>                
        </md-input-container>    
    </md-layout>
    <md-layout>
         <md-input-container>
            <label>مدت طبخ</label>
            <md-input v-model="recipe.cookingTime"></md-input>                
        </md-input-container>    
    </md-layout>
    <md-layout>
         <md-input-container>
            <label>درجه سختی</label>
            <md-input v-model="recipe.difficulty"></md-input>                
        </md-input-container>    
    </md-layout>
    <md-layout>         
        <md-checkbox id="isVegan" name="isVegan" v-model="recipe.isVegan">گیاهی؟</md-checkbox>        
    </md-layout>
    <md-layout>         
        <md-button @click="save()" class="md-fab md-warn">
            <md-icon>save</md-icon>
        </md-button>
    </md-layout>
  </md-layout>

  <md-layout md-column md-gutter>
    <md-layout md-align="center">
        <h3>نام غذا: {{recipe.name}}</h3>
    </md-layout>
    <md-layout md-align="center">
        <h3>برای سرو به: {{recipe.serves}} نفر</h3>
    </md-layout>
    <md-layout md-align="center">
        <h3>مدت آماده سازی: {{recipe.prepTime}} دقیقه</h3>
    </md-layout>
    <md-layout md-align="center">
        <h3>مدت طبخ: {{recipe.cookingTime}} دقیقه</h3>
    </md-layout>
    <md-layout md-align="center">
        <h3>درجه سختی: {{recipe.difficulty}}</h3>
    </md-layout>    
  </md-layout>
</md-layout>
</template>
<script>
import { HttpCall } from "./../../utils/axios-config";

export default {
  data() {
    return {
      isLoading: false,
      html: '<img src="static/puff.svg" />',
      recipe: {
        name: "",
        serves: 0,
        cookingTime: "",
        prepTime: "",
        isVegan: false,
        difficulty: ""
      }
    };
  },
  methods: {
    createInitialRecipe() {
      alert(this.recipe.name);
    },
    save() {
      this.$emit("completed", this.recipe);
      let options = {
        action: {
          text: "بستن",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        },
        position: "bottom-center",
        duration: 4000,
        theme: "primary",
        fullWidth: true,
        fitToScreen: true
      };
      let myToast = this.$toasted
        .show(`عملیات شما با موفقیت انجام شد، لطفآ 'ادامه' را فشار دهید`, options)
        .goAway(5000);      
    }
  },
  mounted() {},
  computed: {}
};
</script>
<style lang="scss">
.my-container {
  max-height: 400px;
  width: 100%;
  margin: 8px;
  padding: 32px;
}
.md-input-container label {
  right: 0;
  left: inherit;
}
.md-checkbox-label {
  margin-right: 8px !important;
}
</style>

