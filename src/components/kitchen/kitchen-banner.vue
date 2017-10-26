<template>  
<md-layout md-column>
    <md-layout class="banner">  
        <img :src="bannerUrl" />                 
    </md-layout>  
    <md-layout class="btns">
      <md-button href="#/kitchen/followers" class="md-accent md-raised followers">دنبال کننده : {{followers}} نفر</md-button>
      <md-button href="#/kitchen/customize" class="md-accent md-raised customize">ایجاد تغییرات ظاهری در آشپزخانه</md-button>  
      <md-button href="#/recipe/create" class="md-accent md-raised customize">ساخت دستور غذائی جدید</md-button>  
    </md-layout>
    </md-layout>
</template>
<script>
export default {
  data() {
    return {
      followers: 23,
      bannerUrl: "static/placeholder.jpg",      
    };
  }  
};
</script>
<style lang="scss" scoped>
.banner {
  // display: inline-block;
  // position: relative;
  max-height: 200px;
}
.btns {
  max-height: 48px;
  position: relative;
  top: -25px;
}

img {
    height: 200px;
    width: 100%;
    max-height: 200px;
  }
</style>

