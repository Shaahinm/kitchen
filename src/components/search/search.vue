<template>
    <div>
        <h1>this is search page</h1>
        <h2>{{query}}</h2>
    </div>
</template>
<script>
export default {
  data() {
      return {
          query: ""
      }
  },
  watch: {
    '$route.params.query': function (query) {
      this.query = this.$route.params.query;
    }
  },
  async mounted() {
      this.query = this.$route.params.query;
  }
}
</script>
<style lang="scss" scoped>

</style>


