<template>   
<!-- <div class="card">
  <header class="card-header">
    <p class="card-header-title">      
        {{model.name}} 
    </p>        
  </header>  
  <div class="card-content">
    <div class="content">   
        <div class="notification" v-for="part in model.parts" :key="part.localId">
            <h3>{{part.name}}</h3>
            <ul>
                <li v-for="ing in part.ingredients" :key="ing.name">
                    <button class="button is-static">{{ing.name}} - {{ing.quantity}} {{ing.measurement}}</button>
                </li>
            </ul>
        </div>
    </div>
  </div>
  <footer class="card-footer">
    <router-link class="card-footer-item" :to="{name: 'edit-recipe-ingredients', params: {id: model.localId}}">ادامه ویرایش</router-link>    
  </footer>
</div> -->
<div class="message">
  {{model.name}}
</div>
</template>
<script>
export default {
  props: ["model"],
  data() {
    return {
      isLoading: false,
      html: '<img src="static/puff.svg" />'
    };
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped>

</style>

