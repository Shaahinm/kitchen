<template>  
<md-whiteframe class="side" md-tag="section" md-elevation="2">
    <!-- <ul data-v-4c26659a="" class="md-list md-theme-default" dir="ltr"><li data-v-4c26659a="" class="md-list-item md-list-item-expand"><div class="md-list-item-container md-button"><i data-v-4c26659a="" aria-hidden="true" class="md-icon md-theme-default material-icons">whatshot</i> <span data-v-4c26659a="">برگزاری مراسم</span>  <i aria-hidden="true" class="md-icon md-list-expand-indicator md-theme-default material-icons">keyboard_arrow_down</i></div> <button type="button" class="md-button md-button-ghost md-theme-default"> <div class="md-ink-ripple"><div class="md-ripple" style="width: 300px; height: 300px;"></div></div></button> <div class="md-list-expand" style="margin-bottom: -144px;"><div data-v-4c26659a="" class="md-list-expand-container"><ul data-v-4c26659a="" class="md-list md-theme-default"><li data-v-4c26659a="" class="md-list-item md-inset"><a href="#" class="md-list-item-container md-button">لیست خرید</a> <div class="md-ink-ripple"><div class="md-ripple" style="width: 300px; height: 300px;"></div></div></li> <li data-v-4c26659a="" class="md-list-item md-inset"><div class="md-list-item-container">لیست مهمان</div></li> <li data-v-4c26659a="" class="md-list-item md-inset"><div class="md-list-item-container">لیست غذا</div></li></ul></div></div></li> <li data-v-4c26659a="" class="md-list-item" md-expand-multiple=""><div class="md-list-item-container"><i data-v-4c26659a="" aria-hidden="true" class="md-icon md-theme-default material-icons">videogame_asset</i> <span data-v-4c26659a="">سوالات در مورد دستور غذا </span></div></li> <li data-v-4c26659a="" class="md-list-item" md-expand-multiple=""><div class="md-list-item-container"><i data-v-4c26659a="" aria-hidden="true" class="md-icon md-theme-default material-icons">video_library</i> <span data-v-4c26659a="">پاسخ به سوالات کلی</span></div></li> <li data-v-4c26659a="" class="md-list-item"><div class="md-list-item-container"><i data-v-4c26659a="" aria-hidden="true" class="md-icon md-theme-default material-icons">shopping_basket</i> <span data-v-4c26659a="">خرید لوازم آشپزخانه</span></div></li></ul> -->
    <md-list dir="ltr">
        <md-list-item md-expand-multiple>
        <md-icon>whatshot</md-icon>
        <span>برگزاری مراسم</span>
        <md-list-expand>
        <md-list>
            <md-list-item href="#" class="md-inset">لیست خرید</md-list-item>
            <md-list-item class="md-inset">لیست مهمان</md-list-item>
            <md-list-item class="md-inset">لیست غذا</md-list-item>
        </md-list>
        </md-list-expand>
    </md-list-item>

    <md-list-item md-expand-multiple>
        <md-icon>videogame_asset</md-icon>
        <span>سوالات در مورد دستور غذا </span>
    </md-list-item>

    <md-list-item md-expand-multiple>
        <md-icon>video_library</md-icon>
        <span>پاسخ به سوالات کلی</span>        
    </md-list-item>

    <md-list-item>
        <md-icon>shopping_basket</md-icon>
        <span>خرید لوازم آشپزخانه</span>
    </md-list-item> 
    </md-list> 
</md-whiteframe>
    
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
.side {
  max-height: 400px;
  width: 100%;
  margin: 8px;  
}
</style>