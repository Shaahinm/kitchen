<template>   
<div class="card">
  <header class="card-header">
    <a @click="deletePart(part)" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </span>
    </a>
    <p class="card-header-title">      
       {{part.name}}
    </p>    
    <div class="field partname">                            
        <div class="control has-icons-left">
            <input name="partname" v-validate.initial="'required'" maxlength="32" v-model="part.name" :class="{'input': true, 'is-danger': errors.has('partname')}" type="text" placeholder="نام قسمت جدید">
            <span class="icon is-small is-left">
                <i v-show="errors.has('partname')" class="fa fa-warning"></i>                   
            </span>            
        </div>        
    </div>  

  </header>  
  <div class="card-content">
    <div class="content">
        <table class="table">
            <thead>
                <tr>
                    <th style="width: 50%;">نام</th>
                    <th>مقدار</th>
                    <th>واحد</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>                
                <tr v-for="(ing, index) in part.ingredients" :key="index">
                    <td>
                        <div class="field">                            
                            <div class="control has-icons-left">
                                <input :name="'ingname' + index" v-validate.initial="'required'" maxlength="32" v-model="ing.name" :class="{'input': true, 'is-danger': errors.has('ingname'+index)}" type="text" placeholder="نام مواد اولیه">
                                <span class="icon is-small is-left">
                                    <i v-show="errors.has('ingname'+index)" class="fa fa-warning"></i>                   
                                </span> 
                            </div>
                        </div>
                    </td>       
                    <td>
                        <div class="field">                            
                            <div class="control has-icons-left">
                                <input :name="'ingquantity' + index" v-validate.initial="'numeric|required'" maxlength="8" v-model="ing.quantity" :class="{'input': true, 'is-danger': errors.has('ingquantity' + index)}" type="text" placeholder="مقدار">
                                <span class="icon is-small is-left">
                                    <i v-show="errors.has('ingquantity' + index)" class="fa fa-warning"></i>                   
                                </span>                                 
                            </div>
                        </div>
                    </td>       
                    <td>
                        <div class="field">
                            <div class="control">
                                <div class="select">
                                <select v-model="ing.measurement">
                                    <option>گرم</option>
                                    <option>کیلو</option>
                                    <option>قاشق غذا خوری</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </td>  
                    <td style="vertical-align: bottom;">
                        <p @click="removeIngredients(ing)" class="field">
                            <a style="opacity: 0.4;" class="button is-small is-danger">
                                <span class="icon is-small">
                                    <i class="fa fa-minus"></i>
                                </span>
                            </a>
                        </p>
                    </td>     
                </tr>
            </tbody>
        </table> 
        <div class="container">
            <p class="field">
                <a style="margin-right: 12px;" @click="addNewIngredient()" class="button is-small is-info">
                    <span class="icon is-small">
                    <i class="fa fa-plus"></i>
                    </span>
                </a>
            </p>
        </div>          
    </div>
  </div>
  <footer class="card-footer">
    <a @click="savePart(part)" class="card-footer-item">ذخیره</a>    
    <!-- <a  class="card-footer-item">حذف</a>     -->
  </footer>
</div>
</template>
<script>
import { HttpCall } from "./../../../utils/axios-config";
import { mapFields } from "vee-validate";
export default {
  props: ["part"],
  data() {
    return {
      isLoading: false,
      html: '<img src="static/puff.svg" />'
    };
  },
  methods: {
    addNewIngredient() {
      this.part.ingredients.push({ name: "", measurement: "", quantity: "" });
    },
    deletePart(key) {
      this.$emit("deletePart", key);
    },
    removeIngredients(ing) {
      var index = this.part.ingredients.indexOf(ing);
      if (index !== -1) {
        this.part.ingredients.splice(index, 1);
      }
    },
    savePart(key) {
      this.$validator.reset();
      this.$emit("savePart", key);
    }
  },
  mounted() {},
  computed: {
    ...mapFields(["partname", "ingname", "ingquantity"]),
    isFormDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
  },
  watch: {
    isFormDirty: function(value) {
      this.$emit("isDirty", value);
    }
  }
};
</script>
<style lang="scss" scoped>
.partname {
  top: 5px;
  right: 5px;
  margin: 5px;
}
.card-header-title {
  direction: ltr;
}
</style>

