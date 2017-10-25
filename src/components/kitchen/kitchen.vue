<template>  
  <md-layout md-column md-gutter>   
    <md-layout style="max-height: 260px;" md-flex-large="100" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-xlarge="100">
      <kitchen-banner></kitchen-banner>
    </md-layout> 
    <md-layout md-vertical-align="start">      
      <md-layout md-column-xsmall md-flex-xsmall="100" md-flex-small="100" md-flex-medium="40" md-flex-large="20" md-flex-xlarge="15">
        <kitchen-sidebar></kitchen-sidebar>
      </md-layout>
      <md-layout>
      <kitchen-main :favs="favs" :recipes="recepies"></kitchen-main>
      </md-layout>
      <button @click="getCategories()">asjkdhashdas</button>
    </md-layout>      
  </md-layout>
</template>
<script>
import { HttpCall } from "./../../utils/axios-config";

export default {
  data() {
    return {
      cats: [],
      recepies: {
        text: "هاهاهاهاه"
      },
      favs: {
        text: "هاهاهاهاه"
      },
      isLoading: false,
      html: '<img src="static/puff.svg" />'
    };
  },
  methods: {
    test() {
      var a = new HttpCall();

      var context = a.getContext(success => {}, error => {});
      a.get("recipes", context);
    },
    getCategories() {
      if (localStorage.getItem('settings') === null) {
        var a = new HttpCall();
        a.triggerCacheUpdate(() => {          
           console.log("shaahin");
        });
      } else {
        console.log("shaahin");
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.md-layout {
  overflow-y: auto;
}

.sidebar {
  @media (max-width: 767px) {
    flex-direction: column;
    max-height: 200px;
  }
}
</style>

