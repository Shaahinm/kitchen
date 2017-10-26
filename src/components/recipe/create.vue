<template> 
  <md-stepper dir="ltr">
    <md-step md-button-back="بازگشت" md-button-continue="ادامه" md-label="اطلاعات اولیه">
        <basic-info @completed="getBasicInfo"></basic-info>
    </md-step>
    <md-step md-button-back="بازگشت" md-button-continue="ادامه" md-label="مواد اولیه" :md-message="recipe.name">
        <ingredients @completed="getIngredients"></ingredients>
    </md-step>
    <md-step md-label="test" md-message="Pennsylvania">
        <p>This seems something I need to focus on just after the first step.</p>
    </md-step>
    </md-stepper>
</template>
<script>
import { HttpCall } from "./../../utils/axios-config";

export default {
  data() {
    return {
      cats: [],
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
      //   var a = new HttpCall();

      //   var context = a.getContext(success => {}, error => {});
      //   a.get("recipes", context);
      alert(this.recipeName);
    },
    getBasicInfo(value) {
      this.recipe = value;
      console.log(this.recipe, "from parent");
    },
    getIngredients() {

    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.my-container {
  max-height: 400px;
  width: 100%;
  margin: 8px;
  padding: 32px;
}

.md-steps-navigation-container {
  direction: rtl !important;
}
// .md-stepper .md-steps-vertical-container .md-step:not(:last-of-type) .md-step-content {
//     padding-right: 24px;
//     padding-left: 0;
//     border-right: 1px solid #BDBDBD !important;
//     border-right: none;
// }
</style>

