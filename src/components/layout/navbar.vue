<template>
<section class="hero is-info">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <!-- <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA" @click="toggleNavbar()">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA"  v-bind:class="{ 'is-active': isActive }" class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" :to="{ name: 'home' }" exact active-class="is-active">
              خانه
            </router-link>
            <router-link class="navbar-item" :to="{ name: 'about'}" exact active-class="is-active">
              درباره ما
            </router-link>            
            <span class="navbar-item">
              <router-link active-class="is-active" class="button" to="/kitchen" exact>
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>آشپزخانه من</span>
              </router-link>
            </span>
            <span class="navbar-item">
              <router-link active-class="is-active" class="button" to="/authentication/login" exact>
                <span class="icon">
                  <i class="fa fa-sign-in"></i>
                </span>
                <span>ورود</span>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </nav> -->
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">      
      <div class="field has-addons">
        <p class="control">
          <span class="select">
            <select>
              <option>همه</option>
              <option>پیش غذا</option>
              <option>نوشیدنی</option>
              <option>دسر</option>
            </select>
          </span>
        </p>
        <p class="control has-icon-left is-expanded is-loading">
          <input class="input" type="text" placeholder="جستجو در دستورات غذا">          
        </p>
        <p class="control">
          <a class="button">
            جستجو
          </a>
        </p>
      </div>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>          
          <router-link tag="li" active-class="is-active" to="/kitchen" exact>
          <a>            
            <span>آشپزخانه من</span>
            </a>
          </router-link>      
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a class="is-active">Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
</template>


<style lang="scss">
.hero-body {
  padding: 1rem 1.5rem;
}
.tabs ul {
  flex-direction: row;
}
</style>

<script>
export default {
  name: "navbar",
  data: () => ({
    nav: [
      {
        url: "/",
        icon: "panorama",
        label: "خانه"
      },
      {
        url: "/kitchen",
        icon: "code",
        label: "آشپزخانه من"
      },
      {
        url: "/authentication/login",
        icon: "panorama",
        label: "ورود"
      },
      {
        url: "/kitchen",
        icon: "code",
        label: "آشپزخانه من"
      }
    ],
    isActive: false
  }),
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive;
    }
  },
  async mounted() {}
};
</script>
 
 