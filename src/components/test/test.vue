<template>
  <div class="container">
      <br>
      <button @click="savetolocal" class="button">save to localstorage</button>
      <button @click="deleteFromLocal" class="button">delete from localstorage</button>
      <br>
      <br>
      <input list="browsers" class="input" type="text" @keyup="search" v-model="query">
      <datalist id="browsers">
        <option v-for="(item, index) in res" :key="index" :value="item" />
        <!-- <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" /> -->
    </datalist>
      <div>{{res}}</div>
  </div>
</template>
<script>
import json from "./../../test-data.json";
export default {
  data() {
    return {
      res: [],
      query: ""
    };
  },
  methods: {
    savetolocal() {
      localStorage.setItem("search", JSON.stringify(json));
    },
    deleteFromLocal() {
      localStorage.removeItem("search");
    },
    search() {
      this.res = [];
      if (this.query.length >= 2) {
        json.forEach(x => {
          if (x.name.includes(this.query)) {
            this.res.push(x.name);            
          }
        });
      }
    }
  },
  mounted() {
    //   this.res = json;
  }
};
</script>

