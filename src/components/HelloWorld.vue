<template>
 <span>{{msg}}</span>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: this.$auth.getUserName()
    };
  },
  mounted() {
    //  let myToast = this.$toasted.show("Holla !!").goAway(3000);
    //  myToast.text("Changing the text !!!").goAway(5500);

    //  this.$toasted.global.success_toast();
    //  this.$toasted.global.error_toast();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
