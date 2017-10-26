<template>  
  <md-layout md-gutter dir="rtl">
    <md-layout md-column md-gutter>
        <md-layout>
        <md-input-container>
            <label>نام قسمتی از غذا که میخواهید مواد اولیه آن را بنویسید</label>
            <md-input v-model="partName"></md-input>                
        </md-input-container>      
        </md-layout>
        <md-layout class="temp-ing" md-row md-flex>
            <md-input-container>
                <label>نام مواد اولیه</label>
                <md-input v-model="ingName"></md-input>                                
            </md-input-container>    
            <md-input-container>
                <label>مقدار</label>
                <md-input v-model="ingQuantity"></md-input>                
            </md-input-container> 
            <md-input-container>
                <label>اندازه گیری</label>
                <md-input @keyup.enter.native="addIngredients()" v-model="ingMeasurement"></md-input>                
            </md-input-container>  
            <md-layout md-vertical-align="center">         
                <md-button @click="addIngredients()" class="md-fab md-primary md-mini">
                    <md-icon>add</md-icon>
                </md-button>
            </md-layout>     
        </md-layout>      
        <md-layout>         
            <md-button @click="save()" class="md-fab md-warn">
                <md-icon>save</md-icon>
            </md-button>
        </md-layout>

    </md-layout>

    <md-layout md-row md-gutter>
        <md-card md-with-hover>
            <md-card-header>
                <div class="md-title">{{partName}}</div>                
            </md-card-header>
            <md-card-content>
                <ul>
                    <li v-for="ing in tempIngs" v-bind:key="ing.name">
                        {{ing.name}} - {{ing.quantity}} {{ing.measurement}}
                    </li>
                </ul>             
            </md-card-content>
            <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
            </md-card-actions>
        </md-card>
         <md-card class="md-warn" v-for="item in recipe" v-bind:key="item.part" md-with-hover>
            <md-card-header>
                <div class="md-title">{{item.part}}</div>                
            </md-card-header>

            <md-card-content>
                <ul v-for="part in item.ingredients" v-bind:key="part.name">
                    <li>{{part.name}} - {{part.quantity}} {{part.measurement}}</li>
                                      
                </ul>                
            </md-card-content>

            <md-card-actions>
                <md-button>تغییرات</md-button>
                <md-button>حذف</md-button>
            </md-card-actions>
        </md-card>
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
      recipe: [
        {
          part: '',
          ingredients: [
            {
              name: '',
              quantity: '',
              measurement: ''
            }
          ]
        }
      ],
      partName: "",
      ingName: "",
      ingQuantity: "",
      ingMeasurement: "",
      tempIngs: []
    };
  },
  methods: {
    createInitialRecipe() {
      alert(this.recipe.name);
    },
    save() {
      this.$emit("completed", this.recipe);
      var item = {
        part: this.partName,
        ingredients: this.tempIngs
      };

      this.recipe.push(item);
      this.tempIngs = [];
      this.partName = '';

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
        .show(`عملیات شما با موفقیت انجام شد`, options)
        .goAway(5000);
    },
    addIngredients() {
      var ing = {
        name: this.ingName,
        quantity: this.ingQuantity,
        measurement: this.ingMeasurement
      };
      this.tempIngs.push(ing);
      this.ingName = "";
      this.ingQuantity = "";
      this.ingMeasurement = "";
    }
  },
  mounted() {},
  computed: {}
};
</script>
<style lang="scss">
.md-card {
  margin: 16px;
  max-width: 300px;
  min-width: 300px;
}
.temp-ing {
  .md-input-container {
    width: 25%;
  }
}
</style>

