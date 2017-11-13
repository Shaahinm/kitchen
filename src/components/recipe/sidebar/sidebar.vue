<template>  
  <aside class="menu">
    <p class="menu-label">
      آشپزخانه من
    </p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'kitchen'}">بازگشت به آشپزخانه من</router-link></li>
    </ul>
    <p class="menu-label">
      دستور غذا
    </p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'create-recipe'}" active-class="is-active" exact>ایجاد دستور غذای جدید</router-link></li>
      <li><router-link :to="{ name: 'unsaved-recipes'}" active-class="is-active" exact>لیست دستورات در حال ویرایش</router-link></li>      
      <li><router-link :to="{ name: 'home'}" active-class="is-active" exact>لیست دستورات منتشر شده</router-link></li>      
    </ul>
    <p v-if="localId" class="menu-label">
      دسترسی سریع
    </p>
    <ul v-if="localId" class="menu-list">      
      <li><router-link :to="{ name: 'edit-recipe-basic-info', params: {id: this.localId}}" active-class="is-active" exact>اطلاعات اولیه</router-link></li>
      <li><router-link :to="{ name: 'edit-recipe-ingredients', params: {id: this.localId}}" active-class="is-active" exact>مواد اولیه</router-link></li>      
      <li><router-link :to="{ name: 'edit-recipe-instruction', params: {id: this.localId}}" active-class="is-active" exact>دستور غذا</router-link></li>      
    </ul>
    <p class="menu-label">
      پرسش و پاسخ
    </p>
    <ul class="menu-list">      
    </ul>
  </aside>

</template>
<script>
export default {
  data() {
    return {
      localId: 0
    };
  },
  mounted() {
    this.localId = this.$route.params.id;    
  }
};
</script>
<style lang="scss" scoped>

</style>