<template>   
<div class="section">
  <confirmation-dialog :status="activateModal" @handleUserInput="handleConfirmationResult_child"></confirmation-dialog>
  <div class="box side">
    <create-recipe-sidebar></create-recipe-sidebar>
  </div>
  <div class="box main">
    <div class="tabs is-large is-fullwidth is-centered" dir="ltr">
      <ul>      
        <li><a>نمایش پایانی</a></li>
        <li><router-link :to="{ name: 'edit-recipe-instruction', params: {id: this.localId}}" active-class="is-active" exact>دستور غذا</router-link></li>   
        <li class="is-active"><router-link :to="{ name: 'edit-recipe-ingredients', params: {id: this.localId}}" active-class="is-active" exact>مواد اولیه</router-link></li>             
        <li><router-link :to="{ name: 'edit-recipe-basic-info', params: {id: this.localId}}" active-class="is-active" exact>اطلاعات اولیه</router-link></li>             
      </ul>         
    </div>  
  <help-component title="سلام" :body="help_body"></help-component>
  <div class="box">
    <div class="field">        
        <a @click="addPart()" class="button is-info">
          <span class="icon">
            <i class="fa fa-plus"></i>            
          </span>
          <span>اضافه کردن قسمت جدید</span>
        </a>
      </div>
  </div>
  <div class="section box">
    <div class="columns is-multiline">
      <div class="column is-half" v-for="item in recipe" v-bind:key="item.partname">
        <ingredient-part :part="item" @deletePart="deletePart_child" @isDirty="isDirty_child" @savePart="savePart_child"></ingredient-part>
      </div>
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <router-link class="button is-link" :to="{name: 'edit-recipe-basic-info', params: {id: this.localId}}">مرحله قبل</router-link> 
    </div>
    <div class="control">      
      <router-link class="button is-link" :to="{name: 'edit-recipe-instruction', params: {id: this.localId}}">مرحله بعد</router-link> 
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
      recipe: [],
      partName: "",
      ingredientName: "",
      ingQuantity: "",
      ingMeasurement: "",
      tempIngs: [],
      localId: 0,
      parts: [], // this is used to load data
      isDirty: false,
      activateModal: "",
      partToDelete: {},
      help_body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
    };
  },
  methods: {
    addPart() {
      var part = {
        partId: Date.now(),
        name: "",
        ingredients: [{ name: "", measurement: "", quantity: "" }]
      };
      this.recipe.unshift(part);
    },
    save() {
      //   this.$emit("completed", this.recipe);
      var item = {
        part: this.partName,
        ingredients: this.tempIngs
      };
      this.recipe.push(item);
      this.tempIngs = [];
      this.partName = "";
      this.$toasted.global.success_toast();
    },
    deletePart_child(part) {      
      this.activateModal = 'activate';  
      this.partToDelete = part;    
      // recipeManager.removePartFromRecipe(part.partId, this.localId);
    },
    handleConfirmationResult_child(res) {
      if (res === "true") {
        this.doDeletePart();
      }
      this.activateModal = "";      
      this.partToDelete = {};
    },
    doDeletePart() {
      // this parts deletes part from UI array - this.recipe
      var index = this.recipe.indexOf(this.partToDelete);
      if (index !== -1) {
        this.recipe.splice(index, 1);        
        var currentKitchen = recipeManager.getParsedToken();
        var recipe = currentKitchen.recipes.find(
          e => e.localId == this.localId
        );
        var part = recipe.parts.find(e => e.partId == this.partToDelete.partId);
        var pIndex = recipe.parts.indexOf(part);

        if (pIndex !== -1) {
          recipe.parts.splice(pIndex, 1);
          recipeManager.setToken(currentKitchen);
          this.$toasted.global.success_toast();
        } else {
          this.$toasted.global.error_toast();
        }
      }     
    },
    savePart_child(part) {
      if (recipeManager.getToken() !== null) {
        //   // var currentKitchen = JSON.parse(localStorage.getItem("kitchen"));
        var currentKitchen = recipeManager.getParsedToken();
        var recipe = currentKitchen.recipes.find(
          e => e.localId == this.localId
        );

        var checkPart = recipe.parts.find(e => e.partId == part.partId);
        if (checkPart) {
          var pIndex = recipe.parts.indexOf(checkPart);          
          if (pIndex !== -1) {
            recipe.parts.splice(pIndex, 1);
          }
        }

        recipe.parts.push(part);
        recipeManager.setToken(currentKitchen);
        this.$toasted.global.success_toast();
      } else {
        alert("get out");
      }
    },
    loadParts() {
      var c = recipeManager.getRecipeById(this.localId);

      if (c && c.parts.length > 0) {
        c.parts.forEach(function(element) {
          this.recipe.push(element);
        }, this);
      }
    },
    isDirty_child(value) {
      this.isDirty = value;
      }    
  },
  mounted() {    
    this.localId = this.$route.params.id;
    this.loadParts();
  },
  beforeRouteLeave: function(to, from, next) {    
    if(this.isDirty)
    {
      var answer = confirm('تغییرات ذخیره نشده دارید، آیا مایل به ادامه هستید؟')
      if(answer) {
        next(true);  
      } else {
        next(false);  
      }
    }else {
      next(true);
    }
    
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.my-input {
  width: 400px;
}
.control {
  text-align: right;
}
</style>



