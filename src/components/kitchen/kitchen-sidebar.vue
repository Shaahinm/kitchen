<template>  
  <aside class="menu">
    <p class="menu-label">
      آشپزخانه من
    </p>
    <ul class="menu-list">
      <li><a>ایجاد تغییرات در آشپزخانه</a></li>
      <li><a>۳۲۱ دنبال کننده</a></li>
    </ul>
    <p class="menu-label">
      دستور غذا
    </p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'create-recipe'}">ایجاد دستور غذای جدید</router-link></li>
      <li><a>دستورات غذاهای من</a></li>
      <li><a>کامنت های دستورات من</a></li>
    </ul>
    <p class="menu-label">
      کلی
    </p>
    <ul class="menu-list">
      <li><a>برگزاری مهمانی</a></li>      
      <li><a>خرید وسایل آشپزخانه</a></li>      
      <li><a>نوشتن بلاگ</a></li>      
      <li><a>کنترل محتوای یخچال</a></li>  
    </ul>
    <p class="menu-label">
      پرسش و پاسخ
    </p>
    <ul class="menu-list">
      <li><a>سوالات درمورد دستورات من</a></li>
      <li><a>سوالات کلی</a></li>      
    </ul>
  </aside>

</template>
<script>
export default {
  data() {
    return {
      followers: 23,
      bannerUrl: "static/placeholder.jpg"
    };
  }
};
</script>
<style lang="scss" scoped>

</style>