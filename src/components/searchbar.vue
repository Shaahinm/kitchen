<template>
<div class="sw">
    <form action="/search" method="GET">
      <md-input-container  class="category dropdown">
        <label for="users">دسته بندی</label>
        <md-select name="option" id="option" v-model="items">
          <md-option v-for="(option, index) in categories" :key="index" :value="option">
            {{ option.name }}
          </md-option>
        </md-select>
      </md-input-container>

      <input v-bind:class="{ mobileSearch: isMobile }" type="search" class="search" placeholder="جستجو" />
      <router-link tag="md-button" to="/kitchen" class="md-raised md-accent go">
          <md-icon>search</md-icon>
      </router-link> 
      <md-button class="search-trigger md-icon-button" @click.native="toggleSearch">
        <md-icon>search</md-icon>
      </md-button>  
      
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    isMobile: false,
    categories: [
      { id: 1, name: "همه" },
      { id: 2, name: "غذای اصلی" },
      { id: 3, name: "دسر" },
      { id: 4, name: "نوشیدنی" },
      { id: 5, name: "غذای محلی" }
    ],
    items: []
  }),
  computed: {
    isDisabled() {
      return true;
    }
  },
  methods: {
    toggleSearch() {
      this.isMobile = !this.isMobile;
    }
  }
};
</script>

<style lang="scss" scoped>
.sw {
  float: left;
  width: 100%;
  height: 70px;
  background: inherit;
  padding: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 0 0px rgba(#000, 0.1);

  form {
    float: left;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .search {
    &.mobileSearch {
      display: block;
      width: 60%;
      top: 13px;
      left: 85px;
      position: absolute;
      transition: all 0.05s ease-in-out;
      -webkit-appearance: none;
      //   &:focus {
      //     height: 40px;
      //     margin-left: -15px;
      //     width: 60%;
      //     left: 92px;
      //     padding: 10px 15px;
      //   }
      + .go {
        display: block;
        height: 40px;
        top: 4px;
        margin-right: -15px;
        max-width: 40px; // Prevent icon from moving
      }
    }
    @media (max-width: 767px) {
      display: none;
    }
    flex: 1 1 auto;
    order: 2;
    outline: none;
    border: none;
    border-radius: 0;
    background: #fff;
    padding: 20px;
    font-family: inherit;
    height: 40px;
    transition: all 0.05s ease-in-out;
    -webkit-appearance: none;
    // &:focus {
    //   height: 40px;
    //   margin-left: -15px;
    //   padding: 10px 15px;
    //   + .go {
    //     height: 40px;
    //     margin-right: -15px;
    //     max-width: 40px; // Prevent icon from moving
    //     + a.logo {
    //       visibility: hidden;
    //       opacity: 0;
    //       max-width: 0px;
    //       margin-right: 0;
    //     }
    //   }
    // }
  }

  .go {
    @media (max-width: 767px) {
      display: none;
    }
    flex: 1 1 auto;
    order: 3;
    max-width: 40px;
    display: inline-block;
    border: none;
    background: #fff;
    color: #ccc;
    height: 40px;
    transition: all 0.05s ease-in-out;
    font-size: 21px;
    outline: none;
  }

  .search-trigger {
    @media (min-width: 767px) {
      display: none;
    }
    position: absolute;
    left: 40px;
    top: 15px;
    .md-icon {
      top: 0;
    }
  }

  .category.dropdown {
    @media (max-width: 767px) {
      display: none;
    }
    max-width: 120px;
    margin-left: 10px;    
  }

  .md-input-container label {
    top: 0;
    left: 10px;
  }
  .md-input-container.md-has-value label, .md-input-container.md-input-focused label {
    top: -12px;
    display: none;
  }
}
</style>


