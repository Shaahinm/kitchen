<template>
<md-layout md-gutter>
  <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
    md-flex-xsmall <br>
    md-flex-small="50" <br>
    md-flex-medium="33"
  </md-layout>  
  <BlockUI v-if="isLoading" :html="html" message="لطفآ منتظر بمانید..."></BlockUI>       
</md-layout>
</template>
<script>
import { HttpCall } from "./../utils/axios-config";

export default {
  data() {
    return {
      cats: [],
      isLoading: false,      
      html: '<img src="static/puff.svg" />'
    }
  },
  mounted() {   
   const a = new HttpCall();
    a.get('authentication', {"shaahin": "1"});   

    // b.post("authentication/token", { "email" : "shahinm@gmail.com", "password": "Shaahin@1"}).then(response => {
    //   this.cats = response.data;
    //   console.log(this.cats);
    // }).catch(e => {
    //   console.log(e);
    // });
  }
};
</script>
<style lang="scss" scoped>

</style>

