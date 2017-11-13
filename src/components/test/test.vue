<template>
  <div class="container">
      <br>
      <button @click="savetolocal()" class="button">save to localstorage</button>
      <button @click="deleteFromLocal()" class="button">delete from localstorage</button>
      <br>
      <br>
      <input class="input" type="text" @keyup="search()" v-model="query">
      <div>{{res}}</div>
  </div>
</template>
<script>
import json from "./../../test-data.json";
export default {
  data() {
    return {
      res: {},
      local: [],
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
      json.forEach(x => {
        if (x.name.includes(this.query)) {
          this.res.push(x.name);
        }
      });
    }
  }
};
</script>

