<template>  
<section>    
  <div class="box side">
    <kitchen-sidebar></kitchen-sidebar>
  </div>  
  <div class="main">
    <kitchen-main :favs="favs" :recipes="recepies"></kitchen-main>
    <button @click="test()">progress</button>
    <button @click="test2()">abbas</button>
  </div>  
</section>
    
  
</template> 

<script>
import { HttpCall } from "./../../utils/axios-config";
import { Notification } from "./../../utils/notification";

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
      if (localStorage.getItem("settings") === null) {
        var a = new HttpCall();
        a.triggerCacheUpdate(() => {
          console.log("shaahin");
        });
      } else {
        console.log("shaahin");
      }
    },
    test() {
      Notification.doMeWithProgress(this.$Progress, () => {
        console.log("sadsasdasd");
      });
    },
    test2() {
      this.$mynotify.notify('abbasian');
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>

</style>

