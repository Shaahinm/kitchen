<template>
  <div>
    <md-whiteframe class="main-header">
      <md-toolbar class="md-large">
        <div class="page-wrapper">
          <div class="md-toolbar-container">
            <md-button class="main-menu-trigger md-icon-button" @click.native="toggleSidenav">
              <md-icon md-src="static/icon-menu.svg" />
            </md-button>            
            <md-icon md-src="static/icon-github.svg" />

            <h1 class="md-title md-flex">آشپزخانه</h1>            
            <!-- <nav class="main-navigation">              
              <md-button class="md-dense">ورود</md-button>
              <md-button class="md-dense">تماس با ما</md-button>
              <md-button class="md-dense">درباره ما</md-button>
            </nav> -->
             <md-tabs md-theme="alternative" class="main-navigation" @change="changeTab">
              <md-tab v-for="item in nav" :key="item.url" :md-label="item.label"/>
            </md-tabs>  
          </div>
          <div class="md-toolbar-container">
            <searchbar></searchbar>
            <!-- <md-tabs md-theme="alternative" @change="changeTab">
              <md-tab v-for="item in nav" :key="item.url" :md-label="item.label"/>
            </md-tabs>             -->
          </div>
        </div>
      </md-toolbar>
    </md-whiteframe>

    <md-sidenav class="main-sidenav md-right md-fixed" ref="sideNav" >
      <md-list>
        <md-list-item v-for="item in nav" :key="item.url">
          <router-link exact :to="item.url">
            <md-icon :md-src="`static/icon-${item.icon}.svg`" />
            <span>{{item.label}}</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <!-- <router-view /> -->

    <md-speed-dial md-open="hover" class="md-fab-bottom-right">
      <md-button class="md-fab" md-fab-trigger>
        <md-icon md-icon-morph md-src="static/icon-code.svg" />
        <md-icon md-src="static/icon-add.svg" />
      </md-button>

      <md-button class="md-fab md-primary md-mini md-clean">
        <md-icon md-src="static/icon-note.svg" />
      </md-button>

      <md-button class="md-fab md-primary md-mini md-clean">
        <md-icon md-src="static/icon-work.svg" />
      </md-button>
    </md-speed-dial>
  </div>
</template>


<style lang="scss">
@import "~vue-material/src/core/stylesheets/variables.scss";
html,
body {
  height: 100%;
  overflow: hidden;
}
body {
  display: flex;
}
.container {
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  position: relative;
}
.page-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  position: relative;
}
.main-header {
  position: relative;
  .md-toolbar {
    height: 128px;
    overflow: hidden;
    @media (max-width: 767px) {
      height: 64px;
      min-height: 64px;
    }
  }
  .md-toolbar-container:last-child {
    align-items: flex-end;
    @media (max-width: 767px) {
      // display: none;
      height: 0;
    }
  }
  .main-menu-trigger {
    @media (min-width: 767px) {
      display: none;
    }
    position: absolute;
    left: 10px;
    .md-icon {
      top: 0;
    }
  }

  .md-title {
    @media (min-width: 767px) {
      padding-left: 8px;
    }
  }
  .main-navigation {
    @media (max-width: 767px) {
      display: none;
    }
    .md-button {
      min-width: 0;
      margin: 1px;
      padding-right: 12px;
      padding-left: 12px;
    }
  }
  .md-tabs {
    margin-left: 8px;
    direction: ltr;
  }
  .md-tabs-content {
    display: none;
  }
}
.main-sidenav {
  z-index: 4;
  .router-link-exact-active {
    font-weight: 700;
  }
}
.md-button.md-fab .md-icon {
  display: flex;
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
    ]
  }),
  methods: {
    toggleSidenav() {
      this.$refs.sideNav.open();
    },
    toggleSearch() {
      alert("abbas");
    },
    changeTab(item) {
      const { url } = this.nav[item];
      this.$router.push(url);
    }
  },
  async mounted() {
    await this.$nextTick();
    this.$router.afterEach(() => {
      if (this.$refs.sideNav) {
        this.$refs.sideNav.close();
      }
    });
  }
};
</script>
 
 