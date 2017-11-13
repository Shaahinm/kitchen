<template>
<div :class="{'modal': true, 'is-active': status}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
        <button @click="handleUserInput('false')" class="delete" aria-label="close"></button>
        <p class="modal-card-title">حذف؟</p>      
    </header>
    <section class="modal-card-body">
      <div class="">آیا مایل به حذف آیتم انتخابی هستید؟</div>
    </section>
    <footer class="modal-card-foot">
      <button @click="handleUserInput('true')" class="button is-danger">بله</button>
      <button @click="handleUserInput('false')" class="button">خیر</button>
    </footer>
  </div>
</div>
</template>
<script>
export default {
  name: "confirmation",
  props: ["status"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleUserInput(res) {        
        this.$emit('handleUserInput', res);       
    }
  }
};
</script>
<style>
.modal-card-foot {
  direction: inherit;
}
</style>
