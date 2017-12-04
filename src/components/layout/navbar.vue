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
        <p class="control has-icon-left is-expanded">
          <!-- <input list="mylist" @keyup="search" v-model="query" class="input" type="text" placeholder="جستجو در دستورات غذا">                             -->
          <v-autocomplete @item-selected="itemSelected" @item-clicked="itemClicked" @change="change"
          :input-attrs="{class: 'input', id: 'v-my-autocomplete', 'autofocus':true}" :items="searchSuggestions" 
          :component-item='template' @keyup.enter="abbas" :v-model="query" :get-label="getLabel" @update-items="updateItems" :auto-select-one-item="autoSelect">
          </v-autocomplete>
        </p>        
        <p class="control">
          <button @click="search" class="button">
            جستجو
          </button>
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
.v-autocomplete {
  z-index: 1000;
  text-align: right;
}
.v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  font-size: 1.5em;
  padding: 10px 15px;
  box-shadow: none;
  border: 1px solid #157977;
  width: calc(100% - 32px);
  outline: none;
  background-color: #eee;
}

.v-autocomplete
  .v-autocomplete-input-group.v-autocomplete-selected
  .v-autocomplete-input {
  color: #008000;
  background-color: #f2fff2;
}

.v-autocomplete .v-autocomplete-list {
  width: 100%;
  text-align: right;
  border: none;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 1px solid #157977;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  color: black;
  border-bottom: 1px solid #157977;
  border-left: 1px solid #157977;
  border-right: 1px solid #157977;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:last-child {
  border-bottom: none;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:hover {
  background-color: #eee;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item abbr {
  opacity: 0.8;
  font-size: 0.8em;
  display: block;
  font-family: sans-serif;
}
</style>

<script>
import ItemTemplate from "./suggestionTemplate";
import data from "./../../test-data"
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
    isActive: false,
    allSuggestions: "",
    autoSelect: false,
    searchSuggestions: [],
    // meh
    template: ItemTemplate,
    query: ""
  }),
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive;
    },
    getLabel(item) {
      return item.name;
    },
    updateItems(text) {
      // yourGetItemsMethod(text).then( (response) => {
      //   this.items = response
      // })
      // create a method which returns promise for the search res
      this.searchSuggestions = [];
      this.allSuggestions.forEach(element => {
        if (element.name.includes(text)) {
          this.searchSuggestions.push(element);
        }
      });
    },
    itemSelected(item) {
      this.$router.push({ name: "search", params: { query: item.name } });
    },
    change(text) {
      this.query = text;
    },
    itemClicked(item) {
      console.log("You clicked an item!", item);
    },
    search() {
      if (this.query) {
        this.$router.push({ name: "search", params: { query: this.query } });
      }
    },
    abbas() {
      alert("abbas");
    }  
  },
  async mounted() {
    // check if search suggestions exist
    if (localStorage.getItem("search")) {
      this.allSuggestions = JSON.parse(localStorage.getItem("search"));
    } else {
      // we need to call api and get the result
      localStorage.setItem("search", JSON.stringify(data));
    }    
  }
};
</script>
 
 