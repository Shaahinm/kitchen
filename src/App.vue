<template>
  <div id="app">  
    <navbar></navbar>
    <router-view/>   
    <vue-progress-bar></vue-progress-bar>     
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
.toasted-container .toasted {
  direction: rtl;
}
.side {
  width: 300px;
  position: absolute;
  right: 8px;
  padding-top: 24px;
  margin-top: 8px;
  @media (max-width: 767px) {
    display: none;
  }
}
.main {
  margin-right: 316px;
  padding-top: 24px;
  margin-top: 8px;
  margin-left: 8px;
  direction: rtl;
  @media (max-width: 767px) {
    margin-right: 8px;
  }
}
</style>
